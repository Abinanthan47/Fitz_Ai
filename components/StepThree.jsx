import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


const StepThree = ({ formData, handleChange }) => {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-md font-medium text-gray-700 mb-5">Do you have any speific food allergies ?</label>
                <Textarea placeholder="Type your allergies here." name="allergies"  value={formData.allergies} onChange={handleChange} />
            </div>
            <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Prefered Cusine Type</label>
                <Select  name="cuisineType" onValueChange={(value) => handleChange({ target: { name: 'cuisineType', value } })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Asia">Asian</SelectItem>
                        <SelectItem value="India">Indian</SelectItem>
                        <SelectItem value="American">American</SelectItem>
                        <SelectItem value="Mexican">Mexican</SelectItem>
                        <SelectItem value="Africa">African</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="any">Any</SelectItem>

                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Preferred Macronutrient Ratios</label>
                <Select  name="macronutrientRatio" onValueChange={(value) => handleChange({ target: { name: 'macronutrientRatio', value } })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="balance">Balanced (40% Carbs, 30% Protein, 30% Fat)</SelectItem>
                        <SelectItem value="lowcarb">Low-Carb (20% Carbs, 50% Protein, 30% Fat)</SelectItem>
                        <SelectItem value="highprotein">High-Protein (30% Carbs, 50% Protein, 20% Fat)</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Preferred Meal frequency</label>
                <Select  name="mealFrequency" onValueChange={(value) => handleChange({ target: { name: 'mealFrequency', value } })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="balance">3 Main Meals (Breakfast, Lunch, Dinner)</SelectItem>
                        <SelectItem value="lowcarb">3 Main Meals + 1 Snack</SelectItem>
                        <SelectItem value="highprotein">3 Main Meals + 2 Snacks</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Budget for Meals</label>
                <Select  name="budget" onValueChange={(value) => handleChange({ target: { name: 'budget', value } })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="balance">Low (Budget-Friendly)</SelectItem>
                        <SelectItem value="lowcarb">Medium (Moderately Priced)</SelectItem>
                        <SelectItem value="highprotein">High (Premium Food)</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>

            </div>
        </div>
    );
};

export default StepThree;
