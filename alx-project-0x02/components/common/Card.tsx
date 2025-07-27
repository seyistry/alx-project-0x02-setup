import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 w-full hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-base">{content}</p>
    </div>
  );
};

export default Card;
