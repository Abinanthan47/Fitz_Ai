import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { activity } from '@/constants/Options';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const StepFour = ({ formData, handleChange }) => {
    return (
        <div className="space-y-6">
            {/* Physical Activity Section */}
            <div>
                <Label className="text-lg font-medium mb-3 block">Physical Activity</Label>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                    {activity.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center border p-3 rounded-md cursor-pointer transition-colors ${
                                formData.physicalActivity === item.title
                                    ? 'bg-orange-500 text-white'
                                    : 'hover:bg-orange-100'
                            }`}
                            onClick={() => handleChange({ target: { name: 'physicalActivity', value: item.title } })}
                        >
                            <h2 className="text-sm font-medium">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Health Conditions Section */}
            <div>
                <Label htmlFor="healthConditions" className="text-lg font-medium mb-3 block">
                    Do you have any specific health conditions?
                </Label>
                <Textarea
                    id="healthConditions"
                    name="healthConditions"
                    value={formData.healthConditions}
                    onChange={handleChange}
                    placeholder="E.g., Hypertension, Liver Disease, or None"
                    className="min-h-[100px]"
                />
            </div>

            {/* Supplements Section */}
            <div>
                <Label htmlFor="supplements" className="text-lg font-medium mb-3 block">
                    Do you take any Health supplements?
                </Label>
                <Select
                    name="supplements"
                    onValueChange={(value) => handleChange({ target: { name: 'supplements', value } })}
                >
                    <SelectTrigger id="supplements" className="w-full">
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="sometimes">Sometimes</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default StepFour;
