'use client'

import * as React from "react";
import Link from "next/link";

import { FaPlus, FaAngleLeft } from "react-icons/fa";
import Input from "../../components/Input";
import Form from "../../components/Form";
import BackButton from "../../components/BackButton";

interface FeedbackDetailPropType {}

const initialData = {
  title: "",
  category: [],
  status: [],
  details: "",
}

const AddFeedBack: React.FC<FeedbackDetailPropType> = () => {

  const [value, setValues] = React.useState(initialData);

  const handleValue = () => {

  }

  const handleSubmit = () => {

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
            value={""} 
            onChange={handleValue}
          />
        </Form>
    </div>
  );
};

export default AddFeedBack;
