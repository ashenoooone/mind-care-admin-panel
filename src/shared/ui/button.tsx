import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "rounded-[10px] inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-Azure-A100 text-white",
        secondary: "",
      },
      size: {
        small: "px-[16px] py-[3px]",
        medium: "px-[16px] py-[5px]",
        large: "px-[20px] py-[7px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

type buttonProps = {
  className?: string;
  children?: React.ReactNode;
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = React.memo((props: buttonProps) => {
  const {
    className,
    children,
    variant,
    type = "button",
    size,
    ...rest
  } = props;
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "button";
