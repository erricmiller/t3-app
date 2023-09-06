import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  placeholder?: string;
}

const CustomInput = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    placeholder = "",
    ...remaining
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={cn(
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                className
              )}
              {...remaining}
            />
          </FormControl>
          <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
