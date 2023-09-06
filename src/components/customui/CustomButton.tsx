'use client'
import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Button } from "@/ui/button";
import { Icons } from "@/lib/Icons";
import { cn } from "@/lib/utils";


const customButtonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent text-accent-foreground ",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-none hover:underline text-primary-foreground",
    },
    size: {
      default: "h-10 px-4 py-2",
      xs: "px-2 py-0.5 text-xs",
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-1 text-base",
      lg: "px-4 py-1 text-lg",
    },
    rounded: {
      default: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      none: "rounded-none",
    },
    width: {
      default: "w-full",
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "default",
    width:"default",
  },
});

interface Props extends VariantProps<typeof customButtonVariants> {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  children: ReactNode;
}

const CustomButton = (props: Props) => {
  const {
    children,
    variant = "default",
    size= "default",
    rounded="default",
    width="default",
    // size = Size.MD,
    className = "",
    isLoading = false,
    loadingText = "",
    onClick = () => undefined,
    ...remaining
  } = props;
  return (
    <Button
      className={isLoading ? 
        cn("custom-button h-auto transition duration-150 ease-in-out pointer-events-none",customButtonVariants({  variant, size,rounded,width, className }))
        : 
        cn("custom-button h-auto transition duration-150 ease-in-out pointer-events-auto",customButtonVariants({  variant, size,rounded,width, className }))
    }
    onClick={onClick}
      {...remaining}
    >
      {isLoading ? (
        <>
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          {loadingText ? loadingText : children}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;