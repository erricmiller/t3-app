import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { cn } from '@/lib/utils'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';

type Props = {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  radioGroupClassName?: string;
  radioItemClassName?: string;
  radioItemLabelClassName?: string;
  options: {
    id: string;
    label: string;
    value: string;
  }[];
};

const CustomRadioGroup = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    radioGroupClassName = "",
    radioItemClassName = "",
    radioItemLabelClassName = "",
    options,
    ...remainig
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("mb-3", className)}>
          <FormLabel className={cn("text-base", labelClassName)}>{label}</FormLabel>
          <FormDescription className={cn("!mt-0", descriptionClassName)}>{description}</FormDescription>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className={cn("flex- flex-col space-y-1", radioGroupClassName)} >
              {
                options.map((option) => (
                  <FormItem className={cn("flex items-center space-x-3 space-y-0", radioItemClassName)} key={option.id}>
                    <FormControl>
                      <RadioGroupItem value={option.value} />
                    </FormControl>
                    <FormLabel className={cn("font-normal", radioItemLabelClassName)}>
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))
              }
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomRadioGroup