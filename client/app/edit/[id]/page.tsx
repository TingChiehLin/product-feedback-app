"use client";

import React from "react";

import { CATEGORIES, CategoryType, FORMDATA } from "@/lib";

import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";

const EditFeedback: React.FC = () => {
  const [values] = React.useState(FORMDATA);
  const [categories, setCategories] =
    React.useState<CategoryType[]>(CATEGORIES);

  const handleSubmit = () => {};

  return (
    <FeedbackContainer>
      <BackButton href="/" />
      <Form
        type="Edit"
        title="Editing ‘Add a dark theme option’"
        onSubmit={handleSubmit}
        values={values}
        categories={categories}
        onChangeValues={function (
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ): void {
          throw new Error("Function not implemented.");
        }}
        onChangeCategory={function (i: CategoryType): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </FeedbackContainer>
  );
};

export default EditFeedback;
