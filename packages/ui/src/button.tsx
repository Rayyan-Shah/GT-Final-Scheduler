import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...rest }) => (
  <button className={\`btn btn-\${variant}\`} {...rest}>
    {children}
  </button>
);
