'use client'

import * as React from "react";
import { useRouter } from 'next/navigation';

import { CATEGORIES, CategoryType } from "@/lib/categories";

import Input from "../../components/Input";
import Form from "../../components/Form";
import BackButton from "../../components/BackButton";
import TextField from "../../components/TextField";
import DropDownMenu from "../../components/DropDownMenu";
import Button from "../../components/Button";

type FieldConfig = {
  value: string,
  error: string,
  validator: () => string,
}

interface requestFormType {
  "feedback-title": FieldConfig,
  "feedback-category": CategoryType[],
  "feedback-detail": FieldConfig,
}

const validateTitle = () => {
  // return "Can’t be empty"
  return ""
}

const validateDetail = () => {
  // return "Can’t be empty"
  return ""
}

const initialData: requestFormType = {
  "feedback-title": {value: "", error: "", validator: validateTitle},
  "feedback-category": CATEGORIES,
  "feedback-detail": {value: "", error: "", validator: validateDetail}
}

const AddFeedBack: React.FC = () => {

  const [values, setValues] = React.useState(initialData);
  const [categories, setCategories] = React.useState<CategoryType[]>(CATEGORIES);

  const { push } = useRouter();

  const handleValues = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      setValues((preState) => {
        return {
          ...preState,
          [name]: {
            ...preState[name as keyof requestFormType],
            value: value
          }
        }
      })
  }

  const handleCategory = (i: CategoryType) => { 
    setValues((preState: any) => {
      return {
        ...preState,
        "feedback-category": preState["feedback-category"].map((item:CategoryType)=> {
          return {
            ...item,
            isActive: item.name === i.name,
          }
        })
      }
    })

    setCategories((preState) => {
      return preState.map((item) => ({
        ...item,
        isActive: item.name === i.name,
      }))
    })
  }

  const handleCancel = () => {
    setValues(initialData)
    push("/");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }

  return (
    <div className="flex flex-col items-center gap-[68px] max-w-[540px] mx-auto">
        <BackButton href="/"/> 
        <Form type="Add" title="Create New Feedback" onSubmit={handleSubmit}>
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
          <TextField id={"feedback-detail"} 
                     label={"Feedback Detail"} 
                     description={"Include any specific comments on what should be improved, added, etc."} 
                     name={"feedback-detail"} 
                     value={values["feedback-detail"].value}
                     rows={4} cols={50} 
                     placeholder={"Please input your feedback here"}
                     error={values["feedback-detail"].error}
                     onChange={handleValues}
          />
          <div className="flex justify-end gap-x-4">
            <Button text={"Cancel"} variant={"Cancel"} type="button" onClick={handleCancel}/>
            <Button text={"Add Feedback"} variant={"Add"} type="submit" onClick={() => handleSubmit}/>
          </div>
        </Form>
    </div>
  );
};

export default AddFeedBack;
