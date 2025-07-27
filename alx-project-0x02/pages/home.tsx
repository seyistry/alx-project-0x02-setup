import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const posts = [
  { title: "First title", content: "Hello Alx" },
  { title: "Second title", content: "Welcome to the platform!" },
  { title: "Third title", content: "Enjoy your stay." },
];

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sitePost, setSitePost] = useState<CardProps[]>(posts);

  const handleAddPost = (newPost: CardProps) => {
    setSitePost((prev) => [...prev, { ...newPost }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Header />
      {openModal ? (
        <PostModal close={setOpenModal} onSubmit={handleAddPost} />
      ) : null}
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
        <div className="flex justify-center mb-8">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors"
            onClick={() => setOpenModal(true)}
          >
            Create Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitePost.map((post, idx) => (
            <Card key={idx} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
