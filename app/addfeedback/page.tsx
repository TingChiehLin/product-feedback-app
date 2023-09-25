'use client'

import * as React from "react";
import Link from "next/link";

import { FaPlus, FaAngleLeft } from "react-icons/fa";
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

  const handleValue = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((preValue) => {
      return {
        ...preValue,
        [e.target.name]: e.target.value
      }
    })
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
            onChange={handleValue}
          />
          <DropDownMenu

          />
          <TextField id={"feedback-detail"} 
                     label={"Feedback Detail"} 
                     description={"Include any specific comments on what should be improved, added, etc."} 
                     name={"feedback-detail"} 
                     value={values["feedback-detail"]}
                     rows={4} cols={50} 
                     placeholder={"Please input your feedback here"}
                     iserror={false}
                     onChange={handleValue}
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
