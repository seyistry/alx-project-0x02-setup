import { type PostModalProps } from "@/interfaces";
import React from "react";

const PostModal: React.FC<PostModalProps> = ({ close, onSubmit }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    close(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 border border-gray-300">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold m-0">Create Post</h2>
            <button
              type="button"
              aria-label="Close"
              className="text-2xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => close(false)}
            >
              &times;
            </button>
          </div>
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter post title"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content" className="font-semibold">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            placeholder="Write your post..."
            rows={5}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="py-3 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
