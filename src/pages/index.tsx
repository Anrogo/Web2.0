import React from "react";
import MainLayout from "@/components/Layout";
import Home from "@/components/Home";

interface EntryProps {
  page: JSX.Element;
}

const Entry: React.FC<EntryProps> = ({page}) => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default Entry;
