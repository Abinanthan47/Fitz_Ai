export const gender=[
    {
        id:1,
        title:'Male'
    },
    {
        id:2,
        title:'Female'
    },
    {
        id:3,
        title:'Other'
    }
]

export const symptoms=[
    {
        id:1,
        title:'Weight loss'
    },
    {
        id:2,
        title:'Diabetis'
    },
    {
        id:3,
        title:'Weigth gain'
    },
    {
        id:4,
        title:'Athletic'
    },
    {
        id:5,
        title:'Overall Health'
    },
    {
        id:6,
        title:'Muscle gain'
    },
    
]

export const activity=[
    {
        id:1,
        title:'None'
    },
    {
        id:2,
        title:'Walking 🚶‍➡️'
    },
    {
        id:3,
        title:'Yoga 🧘‍♀️'
    },
    {
        id:4,
        title:'Gym 💪'
    },
    {
        id:5,
        title:'Weight Lifting 🏋️‍♀️'
    },
    {
        id:6,
        title:'Sports 🤾‍♂️'
    }

]

export const Aiprompt = 'Create a  meal plan chart for a {age} -year-old {gender} user who is {height} cm tall, weighs {weight} kg,  with blood group {bloodGroup} and is looking to achieve {goal}. The user  prefers {preferredMeal} for duration of {preferredDuration} , user prefers {cuisineType} cuisines. Exclude allgeries foods {allergies} from the meal plan, and ensure meals are {macronutrientRatio} with {mealFrequency} daily make in {budget}. The user do {physicalActivity} and has {healthConditions} health conditions and take {supplements} supplements , dietary preference. in json format'