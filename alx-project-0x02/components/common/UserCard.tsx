import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  const addressString = address
    ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`
    : "";

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 w-full hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-base mb-1">
        Email: <span className="font-semibold">{email}</span>
      </p>
      <p className="text-gray-600 text-base">
        Address: <span className="font-semibold">{addressString}</span>
      </p>
    </div>
  );
};

export default UserCard;
