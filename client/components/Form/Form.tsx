import * as React from "react";
import { RequestFormType, Status } from "@/lib";

import { FaPlus, FaEdit } from "react-icons/fa";

import Input from "../Input";
import DropDownMenu from "../DropDownMenu";
import Button from "../Button";
import TextField from "../TextField";
import { FeedbackCategory, useCategory } from "@/query/querycategory";

type FormType = "Add" | "Edit";

interface FormPropType {
  title: string;
  type: FormType;
  values: RequestFormType;
  categories: FeedbackCategory[];
  updateStatus?: Status[];
  onChangeValues: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeCategory: (
    selectedCategory: FeedbackCategory,
    event: React.MouseEvent<HTMLLIElement>
  ) => void;
  onUpdateStatus?: (u: Status, event: React.MouseEvent<HTMLLIElement>) => void;
  onDelete?: () => void;
  onCancel: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormPropType> = ({
  title,
  type,
  values,
  categories,
  updateStatus,
  onChangeValues,
  onChangeCategory,
  onUpdateStatus,
  onDelete,
  onCancel,
  onSubmit,
}) => {
  const addButtonStyle = {
    background:
      "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
  };
  // const { data: categories } = useCategory();
  const alignButton = type === "Add" && "justify-end";

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
        {type == "Add" && <FaPlus size={"1rem"} color={"white"} />}
        {type == "Edit" && <FaEdit size={"1rem"} color={"white"} />}
      </div>
      <h1 className="text-pfBlueDark text-2xl font-bold mb-10">{title}</h1>
      <div className="flex flex-col gap-y-6">
        <Input
          id={"feedback-title"}
          label={"Feedback Title"}
          description={"Add a short, descriptive headline"}
          type={"text"}
          name={"feedback-title"}
          placeholder={"Please input Title"}
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
        {type === "Edit" && updateStatus && onUpdateStatus && (
          <DropDownMenu
            id={"feedback-status"}
            label={"Update Status"}
            description={"Change feedback state"}
            name={"feedback-status"}
            data={updateStatus}
            onClick={onUpdateStatus}
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
          onChange={onChangeValues}
        />
        <div className={`flex ${alignButton} gap-x-4`}>
          {type === "Edit" && (
            <Button
              text={"Delete"}
              variant={"Delete"}
              type="button"
              onClick={onDelete}
            />
          )}
          {type === "Edit" && <div className="ml-auto"></div>}
          <Button
            text={"Cancel"}
            variant={"Cancel"}
            type="button"
            onClick={onCancel}
          />
          {type === "Edit" ? (
            <Button
              text={"Save Changes"}
              variant={"Add"}
              type="submit"
              onClick={() => onSubmit}
            />
          ) : (
            <Button
              text={"Add Feedback"}
              variant={"Add"}
              type="submit"
              onClick={() => onSubmit}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
