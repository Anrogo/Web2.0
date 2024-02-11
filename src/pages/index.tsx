import React from "react";
import MainLayout from "@/components/Layout";

interface EntryProps {
  page: JSX.Element;
}

const Entry: React.FC<EntryProps> = ({page}) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default Entry;
