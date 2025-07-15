import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "@/components/ui/input"

import { Control, FieldPath, FieldValues } from 'react-hook-form'

interface CustomInput<T extends FieldValues> {
  control: Control<T>,
  // NOTE: "email" | "password" would work, but we will need to edit it on adding new fields. Hence, we are taking an inference of what this might be from authForm
  name: FieldPath<T>,
  label: string,
  placeholder: string,
  type: string,
}

const CustomInput = <T extends FieldValues>({control, name, label, placeholder, type}: CustomInput<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          {/* Use the 'FormLabel' below if you don't want the label to change color on errors */}
          {/* <FormLabel style={{ color: 'inherit' }} className="form-label"></FormLabel> */}
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field} 
              />
            </FormControl>
            <FormMessage className="form-message text-red-600 mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput