"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { CATEGORIES, FORMDATA, RequestFormType } from "@/lib";

import Form from "../../components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";
import BackButton from "@/components/BackButton";
import axios from "axios";
import { FeedbackCategory, useCategory } from "@/query/querycategory";
import { Category } from "@/query/useFeedback";

const AddFeedBack: React.FC = () => {
  const { data: categoryData } = useCategory();
  const [values, setValues] = React.useState(FORMDATA);
  const [selectedCategory, setSelectedCategory] = React.useState();
  //selected category
  // const [categories, setCategories] = React.useState<FeedbackCategory[]>([]);
  const [categories, setCategories] = React.useState<any[]>(CATEGORIES);
  const { push } = useRouter();

  // React.useEffect(() => {
  //   if (categoryData) {
  //     setCategories(categoryData);
  //     // setSelectedCategory(categoryData[0]);
  //   }
  // }, [categoryData]);

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
    // selectedCategory: FeedbackCategory,
    selectedCategory: any,
    event: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>
  ) => {
    if (event) {
      event.preventDefault();
    }

    // Update the active category in `values`
    // setValues((preState) => {
    //   return {
    //     ...preState,
    //     "feedback-category": preState["feedback-category"].map((item) => {
    //       return {
    //         ...item,
    //         isActive: item.type === item.type,
    //       };
    //     }),
    //   };
    // });

    // Update the active category in `values`
    // setValues((preState) => {
    //   return {
    //     ...preState,
    //     "feedback-category": {
    //       ...preState["feedback-category"],

    //     },
    //   };
    // });

    // Update the active category in `values`
    setValues((preState) => {
      // Map through the existing `feedback-category` array and update isActive
      const updatedCategories = preState["feedback-category"].map((item) => ({
        ...item,
        isActive: item.type === selectedCategory.type, // Set selected category's isActive to true, others to false
      }));

      return {
        ...preState,
        "feedback-category": updatedCategories, // Update with new categories array
      };
    });

    // Update the active category in the `categories` state
    setCategories((preState) => {
      return preState.map((item) => ({
        ...item,
        isActive: item.type === selectedCategory.type, // Set active category by id
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
      // const response = await axios.post(
      //   "http://localhost:5555/add-new-feedback",
      //   {
      //     "feedback-title": values["feedback-title"].value,
      //     "feedback-detail": values["feedback-detail"].value,
      //     category:
      //       categories.find((category) => category.isActive)?.type || "UX",
      //   }
      // );
      // if (response.status === 201) {
      //   console.log("Feedback submitted successfully:", response.data);
      //   push("/");
      // }
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
        // categories={categories}
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
