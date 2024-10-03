"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Aiprompt } from "@/constants/Options";
import { chatSession } from "@/services/Aimodal";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState ,useEffect} from "react";
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { FaUser, FaUtensils, FaHeartbeat, FaClipboardList } from "react-icons/fa";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { Button } from "./ui/button";

const steps = [
  { name: "Personal Info", icon: FaUser },
  { name: "Diet Preferences", icon: FaUtensils },
  { name: "Health Details", icon: FaHeartbeat },
  { name: "Final Details", icon: FaClipboardList }
];

const Stepper = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isGuest, setIsGuest] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    weight: "",
    height: "",
    age: "",
    bloodGroup: "",
    goal: "",
    preferredMeal: "",
    preferredDuration: "",
    allergies: "",
    cuisineType: "",
    macronutrientRatio: "",
    mealFrequency: "",
    budget: "",
    physicalActivity: "",
    healthConditions: "",
    supplements: "",
  });

  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handleBack = () => setCurrentStep((prevStep) => prevStep - 1);

  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => {
      GetUserProfile(tokenInfo);
    },
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "application/json",
        },
      })
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        handleSubmit();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async () => {
    const user = localStorage.getItem("user");

    if (!user && !isGuest) {
      setOpenDialog(true);
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = Aiprompt.replace("{age}", formData.age)
      .replace("{height}", formData.height)
      .replace("{weight}", formData.weight)
      .replace("{gender}", formData.gender)
      .replace("{bloodGroup}", formData.bloodGroup)
      .replace("{goal}", formData.goal)
      .replace("{preferredMeal}", formData.preferredMeal)
      .replace("{preferredDuration}", formData.preferredDuration)
      .replace("{allergies}", formData.allergies)
      .replace("{cuisineType}", formData.cuisineType)
      .replace("{macronutrientRatio}", formData.macronutrientRatio)
      .replace("{mealFrequency}", formData.mealFrequency)
      .replace("{budget}", formData.budget)
      .replace("{physicalActivity}", formData.physicalActivity)
      .replace("{healthConditions}", formData.healthConditions)
      .replace("{supplements}", formData.supplements);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      setLoading(false);
      // Store the result in local storage
      localStorage.setItem('mealPlan', JSON.stringify(result));
      // Navigate to the dashboard without query params
      router.push('/dashboard');
    } catch (error) {
      console.error("Error generating meal plan:", error);
      setLoading(false);
    }
  };

  return (
    <div className="  flex justify-center items-center ">
      <div className="container max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Step Navigation */}
        <div className="flex justify-between items-center mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onClick={() => setCurrentStep(index)}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                  currentStep >= index ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {currentStep > index ? (
                  <FaCircle className="w-3 h-3" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <span className={`mt-2 text-xs text-center ${currentStep >= index ? "text-orange-500" : "text-gray-500"}`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {currentStep === 0 && <StepOne formData={formData} handleChange={handleChange} />}
          {currentStep === 1 && <StepTwo formData={formData} handleChange={handleChange} />}
          {currentStep === 2 && <StepThree formData={formData} handleChange={handleChange} />}
          {currentStep === 3 && <StepFour formData={formData} handleChange={handleChange} />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Back
          </Button>
          {currentStep < 3 ? (
            <Button
              onClick={handleNext}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              {loading ? <AiOutlineLoading3Quarters className="animate-spin mr-2" /> : null}
              {loading ? "Generating..." : "Submit"}
            </Button>
          )}
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <AiOutlineLoading3Quarters className="animate-spin inline-block text-6xl text-orange-500 mb-4" />
            <p className="text-xl font-semibold">Generating your meal plan...</p>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Please login to save your meal plan. Guest login is also available.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <Button onClick={login} className="bg-blue-500 hover:bg-blue-600 text-white">
              Login with Google
            </Button>
            <Button onClick={() => setIsGuest(true)} className="bg-gray-300 hover:bg-gray-400 text-gray-800">
              Continue as Guest
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Stepper;
