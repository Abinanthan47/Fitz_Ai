/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");





const apiKey = process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Create a meal plan chart for a {age}-year-old {gender} user who is {height} cm tall, weighs {weight} kg, with blood group {bloodGroup} and is looking to achieve {goal}. The user prefers {preferredMeal} for duration of {preferredDuration}, user prefers {cuisineType} cuisines. Exclude allergies foods {allergies} from the meal plan, and ensure meals are {macronutrientRatio} with {mealFrequency} daily make in {budget}. The user does {physicalActivity} and has {healthConditions} health conditions and takes {supplements} supplements, dietary preference. For each meal, include detailed macronutrient information (calories, protein, carbs, fat) and a brief recipe. Provide the response in JSON format.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        { text: "Create a meal plan chart for a [30]-year-old [female] user who is [170 cm] tall, weighs [75 kg], for 1 week ,and is looking to achieve [weight loss]. The user has a [moderately active] lifestyle and prefers [Mediterranean and Asian] cuisines. Exclude [gluten and shellfish] from the meal plan, and ensure meals are [vegetarian] with [3 main meals + 2 snacks] daily. The user has [PCOS] and a [low-carb] dietary preference." },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify({
            mealPlan: {
              weekdays: [
                // ... meal plan data ...
              ],
              notes: "This meal plan is a guideline and can be adjusted based on your individual needs and preferences. Be sure to drink plenty of water throughout the day. Consult with a healthcare professional for personalized nutrition advice."
            }
          })
        },
      ],
    },
  ],
});

