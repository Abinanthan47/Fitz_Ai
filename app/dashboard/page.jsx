"use client";
import html2pdf from 'html2pdf.js';
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

const Dashboard = () => {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedMealPlan = localStorage.getItem("mealPlan");
    if (storedMealPlan) {
      try {
        const parsedData = JSON.parse(storedMealPlan);
        if (
          parsedData.response &&
          parsedData.response.candidates &&
          parsedData.response.candidates[0].content.parts
        ) {
          const mealPlanText =
            parsedData.response.candidates[0].content.parts[0].text;
          const cleanedMealPlanText = mealPlanText
            .trim()
            .replace(/^[^{]*/, "")
            .replace(/[^}]*$/, "");
          const mealPlanData = JSON.parse(cleanedMealPlanText);
          if (mealPlanData.mealPlan) {
            setMealPlan(mealPlanData.mealPlan);
          } else {
            setError("Meal plan data is not in the expected format");
          }
        } else {
          setError("Stored data is not in the expected format");
        }
      } catch (error) {
        console.error("Error parsing meal plan:", error);
        setError(`Failed to parse meal plan data: ${error.message}`);
      }
    } else {
      setError("No meal plan found. Please generate a meal plan.");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  if (!mealPlan) {
    return (
      <div className="text-center p-4">
        No meal plan available. Please generate a meal plan.
      </div>
    );
  }

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

  const downloadPDF = () => {
    const element = document.body; // Capture the entire body
    const opt = {
      margin: 10,
      filename: 'meal-plan.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const renderTable = () => (
    <table className="hidden md:block w-full border-collapse bg-white rounded-xl shadow-lg">
      <thead className="rounded-lg">
        <tr className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
          <th className="p-3 text-left">Meal</th>
          {mealPlan.weekdays.map((day, index) => (
            <th key={index} className="p-3 text-left">
              {day.day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mealTypes.map((mealType, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
            <td className="p-3 font-semibold text-orange-500">{mealType}</td>
            {mealPlan.weekdays.map((day, dayIndex) => {
              const meal = day.meals.find((m) => m.meal === mealType);
              return (
                <td key={dayIndex} className="p-3 border-2">
                  {meal ? (
                    <div>
                      <p className="font-medium text-gray-800">{meal.recipe}</p>
                      <p className="text-sm text-gray-700 bg-orange-50 rounded-lg p-2 flex-col font-semibold mt-2">
                        Calories: {meal.macros?.calories ?? "N/A"} 🔥, Protein: {meal.macros?.protein ?? "N/A"} 🍳, Carbs: {meal.macros?.carbs ?? "N/A"} 🍚, Fat: {meal.macros?.fat ?? "N/A"} 🥩
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-400 italic">No meal planned</p>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">Your Weekly Meal Plan</h1>
        <Button
          onClick={downloadPDF}
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Download PDF
        </Button>
      </div>

      {/* Table for desktop view */}
      <div className="overflow-x-auto">
        {renderTable()}
      </div>

      {/* Mobile View (Cards) - Only visible on mobile */}
      <div className="md:hidden grid gap-6 mt-6">
        {mealPlan.weekdays.map((day, dayIndex) => (
          <div key={dayIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-4">
              <h2 className="text-xl font-semibold">{day.day}</h2>
            </div>
            <div className="p-4">
              {mealTypes.map((mealType, mealIndex) => {
                const meal = day.meals.find((m) => m.meal === mealType);
                return (
                  <div key={mealIndex} className="mb-4 border-b-2 last:mb-0">
                    <h3 className="text-lg font-semibold mb-2 text-orange-500">{mealType}</h3>
                    {meal ? (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="font-medium text-gray-800 mb-2">{meal.recipe}</p>
                        <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                          <p>Calories: {meal.macros?.calories ?? "N/A"} 🔥</p>
                          <p>Protein: {meal.macros?.protein ?? "N/A"} 🍳</p>
                          <p>Carbs: {meal.macros?.carbs ?? "N/A"} 🍚</p>
                          <p>Fat: {meal.macros?.fat ?? "N/A"} 🥩</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">No meal planned</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
