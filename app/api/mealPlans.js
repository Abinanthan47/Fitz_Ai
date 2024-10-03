// pages/api/mealPlans.js
import { NextApiRequest, NextApiResponse } from 'next';

// Sample data storage - replace this with your actual data handling (e.g., a database)
let mealPlans = [];
import prisma from '../../lib/prisma';

async function createMealPlan(userSelection, mealData, userEmail) {
  try {
    const mealPlan = await prisma.mealPlan.create({
      data: {
        userEmail,
        userSelection: JSON.stringify(userSelection),
        mealData: JSON.stringify(mealData),
      },
    });
    return mealPlan;
  } catch (error) {
    console.error('Error creating meal plan:', error);
    throw error;
  }
}

async function getMealPlans() {
  try {
    const mealPlans = await prisma.mealPlan.findMany();
    return mealPlans;
  } catch (error) {
    console.error('Error fetching meal plans:', error);
    throw error;
  }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userSelection, mealData, userEmail } = req.body;

        // Example: Save meal plan data (you should replace this with your database logic)
        mealPlans.push({ userSelection, mealData, userEmail });
        
        // Respond with success
        return res.status(200).json({ message: 'Meal plan saved successfully!', mealPlans });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
