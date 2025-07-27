import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 w-full hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-2">
        <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold mr-2">
          User: {userId}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-base">{body}</p>
    </div>
  );
};

export default PostCard;
