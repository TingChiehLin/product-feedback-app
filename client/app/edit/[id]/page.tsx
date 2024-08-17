"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { CATEGORIES, STATUS, CategoryType, StatusType, FORMDATA } from "@/lib";

import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";

const EditFeedback: React.FC = () => {
  const [values, setValues] = React.useState(FORMDATA);
  const [categories, setCategories] =
    React.useState<CategoryType[]>(CATEGORIES);
  const [updateStatus, setUpdateStatus] = React.useState<StatusType[]>(STATUS);

  const { push } = useRouter();

  const handleValues = () => {};

  const handleCategory = () => {};

  const handleSubmit = () => {};

  const handleCancel = () => {
    setValues(FORMDATA);
    push("/");
  };

  return (
    <FeedbackContainer>
      <BackButton href="/" />
      <Form
        type="Edit"
        title="Editing ‘Add a dark theme option’"
        onSubmit={handleSubmit}
        values={values}
        categories={categories}
        updateStatus={updateStatus}
        onChangeValues={handleValues}
        onChangeCategory={handleCategory}
        onCancel={handleCancel}
      />
    </FeedbackContainer>
  );
};

export default EditFeedback;
