'use client'

import * as React from "react";
import { useRouter } from 'next/navigation';

import { CATEGORIES } from "../../lib";

import Input from "../../components/Input";
import Form from "../../components/Form";
import BackButton from "../../components/BackButton";
import TextField from "../../components/TextField";
import DropDownMenu from "../../components/DropDownMenu";
import Button from "../../components/Button";

interface FeedbackDetailPropType {}

const initialData = {
  "feedback-title": "",
  "feedback-category": [],
  "feedback-detail":"",
}

const AddFeedBack: React.FC<FeedbackDetailPropType> = () => {

  const { push } = useRouter();

  const [values, setValues] = React.useState(initialData);

  const handleValues = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    if(e.target instanceof HTMLSelectElement) {
      const values = [value];
      setValues((preValue) => {
        return {
          ...preValue,
          [name]: values
        }
      })
    } else {
      setValues((preValue) => {
        return {
          ...preValue,
          [name]: value
        }
      })
    }
  }

  const handleCategory = () => {

  }

  const handleCancel = () => {
    setValues(initialData)
    push("/");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit")
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
          <div className="flex justify-end gap-x-4">
            <Button text={"Cancel"} variant={"Cancel"} type="button" onClick={handleCancel}/>
            <Button text={"Add Feedback"} variant={"Add"} type="submit" onClick={() => handleSubmit}/>
          </div>
        </Form>
    </div>
  );
};

export default AddFeedBack;
