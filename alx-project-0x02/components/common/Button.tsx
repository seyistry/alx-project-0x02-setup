import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  return (
    <button className={` border-1 border-gray-200 py-2 px-4 m-2 ${shape}`}>
      {size}
    </button>
  );
};

export default Button;
