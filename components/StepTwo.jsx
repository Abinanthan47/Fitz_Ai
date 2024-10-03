import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { symptoms } from '@/constants/Options';

const StepTwo = ({ formData, handleChange }) => {
    const handleSelectChange = (name, value) => {
        handleChange({ target: { name, value } });
    };

    return (
        <div className="space-y-6">
            {/* Goal Section */}
            <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">Goal 🎯</label>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                    {symptoms.map((item, index) => (
                        <button
                            key={index}
                            className={`py-3 px-4 rounded-md transition-colors duration-200 ${
                                formData.goal === item.title 
                                ? 'bg-orange-500 text-white' 
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-100'
                            }`}
                            onClick={() => handleChange({ target: { name: 'goal', value: item.title } })}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Preferred Meal Section */}
            <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Preferred Meal 🥗</label>
                <Select
                    name="preferredMeal"
                    value={formData.preferredMeal}
                    onValueChange={(value) => handleSelectChange("preferredMeal", value)}
                >
                    <SelectTrigger className="w-full p-3 text-left border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select a meal type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="vegan">Vegan 🫛</SelectItem>
                        <SelectItem value="Nonveg">Non-Vegan 🍗</SelectItem>
                        <SelectItem value="Both veg and nonveg">Both 🍛</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Preferred Duration Section */}
            <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Preferred Duration ⌛</label>
                <Select
                    name="preferredDuration"
                    value={formData.preferredDuration}
                    onValueChange={(value) => handleSelectChange("preferredDuration", value)}
                >
                    <SelectTrigger className="w-full p-3 text-left border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select a duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1 week">1 Week</SelectItem>
                        <SelectItem value="two week">2 Week</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default StepTwo;
