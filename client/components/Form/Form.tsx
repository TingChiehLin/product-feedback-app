import * as React from "react";
import { requestFormType, CategoryType } from "@/lib";

import { FaPlus } from "react-icons/fa";

import Input from "../Input";
import DropDownMenu from "../DropDownMenu";
import Button from "../Button";
import TextField from "../TextField";

type FormType = "Add" | "Edit";

interface FormPropType {
  title: string;
  type: FormType;
  values: requestFormType;
  categories: CategoryType[];
  onChangeValues: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeCategory: (i: CategoryType) => void;
  onCancel: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormPropType> = ({
  title,
  type,
  values,
  categories,
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
          onChange={onChangeValues}
        />
        <DropDownMenu
          id={"feedback-category"}
          label={"Category"}
          description={"Choose a category for your feedback"}
          name={"feedback-category"}
          data={categories}
          onClick={onChangeCategory}
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
          onChange={onChangeValues}
        />
        <div className="flex justify-end gap-x-4">
          <Button
            text={"Cancel"}
            variant={"Cancel"}
            type="button"
            onClick={onCancel}
          />
          <Button
            text={"Add Feedback"}
            variant={"Add"}
            type="submit"
            onClick={() => onSubmit}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
