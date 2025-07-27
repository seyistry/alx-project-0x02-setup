import React from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">API Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
    revalidate: 60, // Optional: ISR, revalidate every 60 seconds
  };
}

export default Posts;
