"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import Form from "../../components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";
import BackButton from "@/components/BackButton";

const AddFeedBack: React.FC = () => {
  const [values, setValues] = React.useState(initialData);
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
    setValues(initialData);
    push("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FeedbackContainer>
      <BackButton href="/" />
      <Form
        type="Add"
        title="Create New Feedback"
        onSubmit={handleSubmit}
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

export default AddFeedBack;
