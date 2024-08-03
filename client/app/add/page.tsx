"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { CATEGORIES, CategoryType, FORMDATA, requestFormType } from "@/lib";

import Form from "../../components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";
import BackButton from "@/components/BackButton";

const AddFeedBack: React.FC = () => {
  const [values, setValues] = React.useState(FORMDATA);
  const [categories, setCategories] =
    React.useState<CategoryType[]>(CATEGORIES);

  const { push } = useRouter();

  const handleValues = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((preState) => {
      return {
        ...preState,
        [name]: {
          ...preState[name as keyof requestFormType],
          value: value,
        },
      };
    });
  };

  const handleCategory = (i: CategoryType) => {
    setValues((preState: any) => {
      return {
        ...preState,
        "feedback-category": preState["feedback-category"].map(
          (item: CategoryType) => {
            return {
              ...item,
              isActive: item.name === i.name,
            };
          }
        ),
      };
    });

    setCategories((preState) => {
      return preState.map((item) => ({
        ...item,
        isActive: item.name === i.name,
      }));
    });
  };

  const handleCancel = () => {
    setValues(FORMDATA);
    push("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <FeedbackContainer>
      <BackButton href="/" />
      <Form
        type="Add"
        title="Create New Feedback"
        values={values}
        categories={categories}
        onSubmit={handleSubmit}
        onChangeValues={handleValues}
        onChangeCategory={handleCategory}
        onCancel={handleCancel}
      />
    </FeedbackContainer>
  );
};

export default AddFeedBack;
