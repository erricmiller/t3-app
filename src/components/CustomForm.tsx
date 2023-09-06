'use client'

import { Form } from '@/ui/form'

import { cn } from "@/lib/utils";
import { ReactNode } from "react";


type Props = {
    form : any,
    onSubmit:(values:any)=> Promise<void>,
    className?:string,
    children:ReactNode,
}

const CustomForm = (props:Props) => {
    const {form,onSubmit,className,children} = props;
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-4",className)}>
            {children}
        </form>
    </Form>
  )
}

export default CustomForm