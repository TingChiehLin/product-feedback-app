"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { CATEGORIES, STATUS, Status, FORMDATA, RequestFormType } from "@/lib";

import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";
import { FeedbackCategory, useCategory } from "@/query/querycategory";

const EditFeedback: React.FC = () => {
  const { data: categoryData } = useCategory();
  const [values, setValues] = React.useState(FORMDATA);
  const [categories, setCategories] = React.useState<FeedbackCategory[]>([]);
  const [updateStatus, setUpdateStatus] = React.useState<Status[]>(STATUS);

  const { push } = useRouter();

  React.useEffect(() => {
    if (categoryData) {
      setCategories(categoryData);
    }
  }, [categoryData]);

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
    selectedCategory: FeedbackCategory,
    event: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>
  ) => {
    if (event) {
      event.preventDefault();
    }

    // Update the active category in `values`
    setValues((preState) => {
      return {
        ...preState,
        "feedback-category": {
          ...preState["feedback-category"],
          value: selectedCategory.type, // Set the selected category type
          error: "",
        },
      };
    });

    // Update the active category in the `categories` state
    setCategories((preState) => {
      return preState.map((item) => ({
        ...item,
        isActive: item.id === selectedCategory.id, // Set active category by id
      }));
    });
  };

  const handleStatus = (s: Status, event: React.MouseEvent<HTMLLIElement>) => {
    if (event) {
      event.preventDefault();
    }

    setValues((preState) => {
      return {
        ...preState,
        "feedback-status": preState["feedback-status"].map((status: Status) => {
          return {
            ...status,
            isActive: status.type === s.type,
          };
        }),
      };
    });

    setUpdateStatus((preState) => {
      return preState.map((status) => {
        return {
          ...status,
          isActive: status.type === s.type,
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
