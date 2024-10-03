import * as React from "react";
import axios from "axios";

import { FeedbackContext } from "@/store/product-feedback-context";
import { useRouter, usePathname, useParams } from "next/navigation";

import { RequestFormType, STATUS, FORMDATA } from "@/lib";

import { FaPlus, FaEdit } from "react-icons/fa";

import Input from "../Input";
import DropDownMenu from "../DropDownMenu";
import Button from "../Button";
import TextField from "../TextField";
import { FeedbackCategory, useCategory } from "@/query/querycategory";

const addButtonStyle = {
  background:
    "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
};

const Form: React.FC = () => {
  const { data: categoryData } = useCategory();
  const fbCtx = React.useContext(FeedbackContext);

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [values, setValues] = React.useState(FORMDATA);

  React.useEffect(() => {});

  const addfeedbackPage = pathname === "/addfeedback";
  const editfeedbackPage = pathname?.includes("/edit");
  const id = editfeedbackPage && params?.id[0];
  const editItem = fbCtx.feedbacks.find((f) => String(f.id) === id);
  const editTitle = editItem?.title;

  const formTitle = addfeedbackPage
    ? "Create New Feedback"
    : `Editing ${editTitle}`;
  const alignButton = addfeedbackPage && "justify-end";

  const handleValue = (
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
          value: selectedCategory.id,
        },
      };
    });
  };

  const handleStatus = (s: string, event: React.MouseEvent<HTMLLIElement>) => {
    if (event) {
      event.preventDefault();
    }
    setValues((preState) => ({
      ...preState,
      "feedback-status": {
        ...preState["feedback-status"],
        value: s,
      },
    }));
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
          "feedback-category": values["feedback-category"].value,
        }
      );
      if (response.status === 201) {
        const newFeedback = response.data;
        console.log("Feedback submitted successfully:", newFeedback);
        fbCtx.feedbackDispatch({
          type: "ADD_FEEDBACK",
          payload: newFeedback,
        });
        router.push("/");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
    console.log("Form Submit Value:", values);
  };

  const handleUpdate = () => {
    console.log("update");
  };

  const handleClear = () => {
    setValues(FORMDATA);
    // setValues({
    //   ...FORMDATA,
    //   "feedback-status": {
    //     ...FORMDATA["feedback-status"],
    //     value: "Planned", // Reset status to "Planned"
    //   },
    // });
  };

  const handleDelete = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[540px] 
                         rounded-[10px] shadow
                         px-[42px] pt-[52px] pb-10
                         relative bg-white
                        "
    >
      <div
        className="w-14 h-14 rounded-full absolute -top-7 left-[42px] cursor-pointer 
                            flex justify-center items-center"
        style={addButtonStyle}
      >
        {addfeedbackPage && <FaPlus size={"1rem"} color={"white"} />}
        {editfeedbackPage && <FaEdit size={"1rem"} color={"white"} />}
      </div>
      <h1 className="text-pfBlueDark text-2xl font-bold mb-10">{formTitle}</h1>
      <div className="flex flex-col gap-y-6">
        <Input
          id={"feedback-title"}
          label={"Feedback Title"}
          description={"Add a short, descriptive headline"}
          type={"text"}
          name={"feedback-title"}
          placeholder={
            addfeedbackPage ? "Please input Title" : editItem?.title ?? ""
          }
          value={values["feedback-title"].value}
          error={values["feedback-title"].error}
          onChange={handleValue}
        />
        <DropDownMenu
          id={"feedback-category"}
          label={"Category"}
          description={"Choose a category for your feedback"}
          name={"feedback-category"}
          data={categoryData ?? []}
          value={values["feedback-category"].value}
          onClick={handleCategory}
        />
        {editfeedbackPage && (
          <DropDownMenu
            id={"feedback-status"}
            label={"Update Status"}
            description={"Change feedback state"}
            name={"feedback-status"}
            data={STATUS}
            value={values["feedback-status"].value}
            onClick={handleStatus}
          />
        )}
        <TextField
          id={"feedback-detail"}
          label={"Feedback Detail"}
          description={
            "Include any specific comments on what should be improved, added, etc."
          }
          name={"feedback-detail"}
          value={values["feedback-detail"].value}
          rows={4}
          cols={50}
          placeholder={"Please input your feedback here"}
          error={values["feedback-detail"].error}
          onChange={handleValue}
        />
        <div className={`flex ${alignButton} gap-x-4`}>
          {editfeedbackPage && (
            <Button
              text={"Delete"}
              variant={"Delete"}
              type="button"
              onClick={handleDelete}
            />
          )}
          {editfeedbackPage && <div className="ml-auto"></div>}
          <Button
            text={"Clear"}
            variant={"Clear"}
            type="button"
            onClick={handleClear}
          />
          {editfeedbackPage ? (
            <Button
              text={"Save Changes"}
              variant={"Add"}
              type="button"
              onClick={handleUpdate}
            />
          ) : (
            <Button text={"Add Feedback"} variant={"Add"} type="submit" />
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
