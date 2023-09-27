'use client'

import * as React from "react";
import Link from "next/link";

import { FaPlus, FaAngleLeft } from "react-icons/fa";
import { CATEGORIES } from "../../lib";

import Input from "../../components/Input";
import Form from "../../components/Form";
import BackButton from "../../components/BackButton";
import TextField from "../../components/TextField";
import DropDownMenu from "../../components/DropDownMenu";

interface FeedbackDetailPropType {}

const initialData = {
  "feedback-title": "",
  "feedback-category": [],
  "feedback-detail":"",
}

const AddFeedBack: React.FC<FeedbackDetailPropType> = () => {

  const [values, setValues] = React.useState(initialData);

  const handleValues = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value)
    setValues((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleCategory = () => {

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <div className="flex flex-col items-center gap-[68px] max-w-[540px] mx-auto">
        <BackButton href="/"/> 
        <Form type="Add" title="Create New Feedback" onSumit={handleSubmit}>
          <Input 
            id={"feedback-title"} 
            label={"Feedback Title"} 
            description={"Add a short, descriptive headline"} 
            type={"text"} 
            name={"feedback-title"} 
            placeholder={"Please add a dark theme option"} 
            value={values["feedback-title"]} 
            onChange={handleValues}
          />
          <DropDownMenu 
                        id={"feedback-category"}
                        label={"Category"}
                        description={"Choose a category for your feedback"}
                        name={"feedback-category"}
                        data={CATEGORIES}
                        value={values["feedback-category"]}
                        onChange={handleValues}
          />
          <TextField id={"feedback-detail"} 
                     label={"Feedback Detail"} 
                     description={"Include any specific comments on what should be improved, added, etc."} 
                     name={"feedback-detail"} 
                     value={values["feedback-detail"]}
                     rows={4} cols={50} 
                     placeholder={"Please input your feedback here"}
                     iserror={false}
                     onChange={handleValues}
          />
          <div className="">
            {/* <Button/> */}
            {/* <Button/> */}
          </div>
        </Form>
    </div>
  );
};

export default AddFeedBack;
