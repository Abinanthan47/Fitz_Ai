import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { gender } from '@/constants/Options';

const StepOne = ({ formData, handleChange }) => {
    return (
        <div className="space-y-4 ">
            <div className=''>
                <label className="block text-md font-medium text-gray-700 mb-5 ">Specify your gender</label>
                <div className='grid grid-cols-3 gap-2 '>
                    {gender.map((item, index) => (
                        <div 
                        key={index} 
                        className={`flex justify-center items-center border p-2 rounded-sm cursor-pointer ${formData.gender === item.title ? 'bg-orange-500 text-white' : 'hover:bg-orange-500'}`}
                        onClick={() => handleChange({ target: { name: 'gender', value: item.title } })}
                      >
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div >
                <label className="block text-md font-medium text-gray-700 mb-4">Weight (kg)</label>
                <Input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
            </div>

            <div>
                <label className="block text-md font-medium text-gray-700 mb-3">Height (cm)</label>
                <Input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
            </div>

            <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Age</label>
                <Input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-md font-medium text-gray-700 mb-4">Blood group</label>
                <Select name="bloodGroup" onValueChange={(value) => handleChange({ target: { name: 'bloodGroup', value } })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="A+" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a+">A+</SelectItem>
                        <SelectItem value="a-">A-</SelectItem>
                        <SelectItem value="b+">B+</SelectItem>
                        <SelectItem value="b-">B-</SelectItem>
                        <SelectItem value="ab-">AB-</SelectItem>
                        <SelectItem value="ab+">AB+</SelectItem>
                        <SelectItem value="o+">O+</SelectItem>
                        <SelectItem value="o-">O-</SelectItem>
                       
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default StepOne;
