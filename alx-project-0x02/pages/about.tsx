import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const about = () => {
  return (
    <div>
      <Header />
      <h2>About</h2>
      <Button size="large" shape={"rounded-full"} />
      <Button size="medium" shape={"rounded-md"} />
      <Button size="small" shape={"rounded-sm"} />
    </div>
  );
};

export default about;
