"use client";

import React from "react";
import { useRouter } from "next/navigation";

import {
  CATEGORIES,
  STATUS,
  CategoryType,
  StatusType,
  FORMDATA,
  RequestFormType,
} from "@/lib";

import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";

const EditFeedback: React.FC = () => {
  const [values, setValues] = React.useState(FORMDATA);
  const [categories, setCategories] =
    React.useState<CategoryType[]>(CATEGORIES);
  const [updateStatus, setUpdateStatus] = React.useState<StatusType[]>(STATUS);

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

  const handleStatus = (
    s: StatusType,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    if (event) {
      event.preventDefault();
    }

    setValues((preState) => {
      return {
        ...preState,
        "feedback-status": preState["feedback-status"].map(
          (status: StatusType) => {
            return {
              ...status,
              isActive: status.name === s.name,
            };
          }
        ),
      };
    });

    setUpdateStatus((preState) => {
      return preState.map((status) => {
        return {
          ...status,
          isActive: status.name === s.name,
        };
      });
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
  };

  const handleDelete = () => {};

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
        onUpdateStatus={handleStatus}
        onDelete={handleDelete}
        onCancel={handleCancel}
      />
    </FeedbackContainer>
  );
};

export default EditFeedback;
