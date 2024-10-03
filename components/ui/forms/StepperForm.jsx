"use client"
import React, { useState } from "react";
import EditData from "./EditData";
import { Button } from "@/components/ui/button"


const steps = [
  "Specify your gender",
  "Height & Weight",
  "Age & Blood Group",
  "Review Details",
  "Submit",
];

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    weight: "",
    height: "",
    age: "",
    bloodGroup: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Complete your profile</h2>
        <p className="text-gray-500">Please provide the following information</p>
      </div>

      <div className="flex justify-between mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${index + 1 === currentStep ? "text-orange-500" : "text-gray-400"}`}
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-orange-500">
              {index + 1}
            </span>
            {index < steps.length - 1 && <span className="w-16 border-t border-gray-300 mx-2"></span>}
          </div>
        ))}
      </div>

      <form className="space-y-6">
        <EditData currentStep={currentStep} formData={formData} updateData={updateData} />

        <div className="flex justify-between">
          {currentStep > 1 && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}
          {currentStep < steps.length ? (
            <Button variant="default" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="default" type="submit">
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepperForm;
