// components/forms/EditData.jsx
import React from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Input } from "@/components/ui/input"

const EditData = ({ currentStep, formData, updateData }) => {
  switch (currentStep) {
    case 1:
      return (
        <div>
          <h3 className="text-lg font-medium mb-4">Specify your gender</h3>
          <div className="flex space-x-4">
            <label>
              <Input
                type="radio"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={(e) => updateData("gender", e.target.value)}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <Input
                type="radio"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={(e) => updateData("gender", e.target.value)}
                className="mr-2"
              />
              Female
            </label>
            <label>
              <Input
                type="radio"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={(e) => updateData("gender", e.target.value)}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Weight (kg)</label>
            <Input
              type="number"
              value={formData.weight}
              onChange={(e) => updateData("weight", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Height (cm)</label>
            <Input
              type="number"
              value={formData.height}
              onChange={(e) => updateData("height", e.target.value)}
            />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">What is your age?</label>
            <Input
              type="number"
              value={formData.age}
              onChange={(e) => updateData("age", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your blood group</label>
            <Select
              value={formData.bloodGroup}
              onValueChange={(value) => updateData("bloodGroup", value)}
            >
              <Select.Item value="" label="Select blood group" />
              <Select.Item value="A+" label="A+" />
              <Select.Item value="A-" label="A-" />
              <Select.Item value="B+" label="B+" />
              <Select.Item value="B-" label="B-" />
              <Select.Item value="O+" label="O+" />
              <Select.Item value="O-" label="O-" />
              <Select.Item value="AB+" label="AB+" />
              <Select.Item value="AB-" label="AB-" />
            </Select>
          </div>
        </div>
      );
    case 4:
      return (
        <div>
          <h3 className="text-lg font-medium">Review your details</h3>
          <ul className="mt-4 space-y-2">
            {Object.entries(formData).map(([key, value]) => (
              <li key={key} className="flex justify-between border-b pb-2">
                <span className="capitalize">{key}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 5:
      return (
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Submit your information</h3>
          <p>You can update these settings in your dashboard</p>
        </div>
      );
    default:
      return null;
  }
};

export default EditData;
