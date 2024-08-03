import { CATEGORIES, CategoryType } from "@/lib";
import * as React from "react";
import { FaPlus } from "react-icons/fa";
import Input from "../Input";
import DropDownMenu from "../DropDownMenu";

type FormType = "Add" | "Edit";

interface FormPropType {
  title: string;
  type: FormType;
  onChangeValues: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeCategory: (i: CategoryType) => void;
  onCancel: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

type FieldConfig = {
  value: string;
  error: string;
  validator: () => string;
};

interface requestFormType {
  "feedback-title": FieldConfig;
  "feedback-category": CategoryType[];
  "feedback-detail": FieldConfig;
}

const validateTitle = () => {
  // return "Can’t be empty"
  return "";
};

const validateDetail = () => {
  // return "Can’t be empty"
  return "";
};

const initialData: requestFormType = {
  "feedback-title": { value: "", error: "", validator: validateTitle },
  "feedback-category": CATEGORIES,
  "feedback-detail": { value: "", error: "", validator: validateDetail },
};

const Form: React.FC<FormPropType> = ({
  title,
  type,
  onChangeValues,
  onChangeCategory,
  onCancel,
  onSubmit,
}) => {
  const addButtonStyle = {
    background:
      "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
  };

  return (
    <form
      onSubmit={onSubmit}
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
        {type == "Add" && <FaPlus size={"1rem"} color={"white"} className="" />}
      </div>
      <h1 className="text-pfBlueDark text-2xl font-bold mb-10">{title}</h1>
      <div className="flex flex-col gap-y-6">
        <Input
          id={"feedback-title"}
          label={"Feedback Title"}
          description={"Add a short, descriptive headline"}
          type={"text"}
          name={"feedback-title"}
          placeholder={"Please add a dark theme option"}
          value={values["feedback-title"].value}
          error={values["feedback-title"].error}
          onChange={handleValues}
        />
        <DropDownMenu
          id={"feedback-category"}
          label={"Category"}
          description={"Choose a category for your feedback"}
          name={"feedback-category"}
          data={categories}
          onClick={handleCategory}
        />
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
          onChange={handleValues}
        />
        <div className="flex justify-end gap-x-4">
          <Button
            text={"Cancel"}
            variant={"Cancel"}
            type="button"
            onClick={handleCancel}
          />
          <Button
            text={"Add Feedback"}
            variant={"Add"}
            type="submit"
            onClick={() => handleSubmit}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
