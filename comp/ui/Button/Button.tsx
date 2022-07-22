import cn from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import s from "../Button/Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "custom";
  icon?: any;
  height?: number;
  full?:boolean
}

// eslint-disable-next-line react/display-name
const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    icon,
    variant = "primary",
    children,
    height,
    full,
    style = {},
    ...rest
  } = props;

  const rootClassName = cn(
    [s.root],
    {
      [s.primary]: variant === "primary",
      [s.secondary]: variant === "secondary",
      [s.ghost]: variant === "ghost",
      [s.custom]:variant === "custom",
      "w-full": full,
    },
    className
  );

  return (
    <button {...rest} className={rootClassName} style={{ height, ...style }}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
