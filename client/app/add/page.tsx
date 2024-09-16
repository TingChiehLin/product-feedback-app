"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { CATEGORIES, CategoryType, FORMDATA, RequestFormType } from "@/lib";

import Form from "../../components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";
import BackButton from "@/components/BackButton";
import axios from "axios";

const AddFeedBack: React.FC = () => {
  const [values, setValues] = React.useState(FORMDATA);
  const [categories, setCategories] =
    React.useState<CategoryType[]>(CATEGORIES);

  const { push } = useRouter();

  const handleValues = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((preState: typeof values) => {
      return {
        ...preState,
        [name]: {
          ...preState[name as keyof RequestFormType],
          value: value,
          error: "",
        },
      };
    });
  };

  const handleCategory = (
    i: CategoryType,
    event: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>
  ) => {
    if (event) {
      event.preventDefault();
    }

    setValues((preState) => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const titleHasError = values["feedback-title"].validator(
      values["feedback-title"].value
    );

    const detailHasError = values["feedback-detail"].validator(
      values["feedback-detail"].value
    );

    if (titleHasError !== "") {
      setValues((preState: typeof values) => {
        return {
          ...preState,
          "feedback-title": {
            ...preState["feedback-title"],
            error: titleHasError,
          },
        };
      });
    }

    if (detailHasError !== "") {
      setValues((preState: typeof values) => {
        return {
          ...preState,
          "feedback-detail": {
            ...preState["feedback-detail"],
            error: detailHasError,
          },
        };
      });
    }

    try {
      const response = await axios.post(
        "http://localhost:5555/add-new-feedback",
        {
          "feedback-title": values["feedback-title"].value,
          "feedback-detail": values["feedback-detail"].value,
          category:
            categories.find((category) => category.isActive)?.name || "UX",
        }
      );

      if (response.status === 201) {
        console.log("Feedback submitted successfully:", response.data);
        push("/");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
    console.log("Form Submit Value:", values);
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
