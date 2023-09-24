'use client'

import * as React from "react";
import Link from "next/link";

import { FaPlus, FaAngleLeft } from "react-icons/fa";
import Input from "../../components/Input";

interface FeedbackDetailPropType {}

const initialData = {
  title: "",
  category: [],
  status: [],
  details: "",
}

const AddFeedBack: React.FC<FeedbackDetailPropType> = () => {

  const [value, setValues] = React.useState(initialData);

  const handleFbTitle = () => {

  }

  const addButtonStyle = {
    background:
      "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
  };

  return (
    <div className="flex items-center flex-col ">
      <div>
        <div className="flex gap-3.5 mb-[68px]">
          <Link href="/">
            <FaAngleLeft size={"1.2rem"} className="text-pfBlueNormal" />
          </Link>
          <Link href="/">
            <h4 className="font-bold text-sm hover:underline cursor-pointer text-pfGrayDark">
              Go Back
            </h4>
          </Link>
        </div>
        <div
          className="
                      w-full min-w-[540px] h-full bg-red-300 rounded-[10px]
                      px-[42px] pt-[52px] pb-10
                      shadow
                      relative
                    "
        >
          <div
            className="w-14 h-14 rounded-full absolute -top-7 left-[42px] cursor-pointer bg-red-300 
                        flex justify-center items-center"
            style={addButtonStyle}
          >
            <FaPlus size={"1rem"} color={"white"} className="" />
          </div>
          <div id="addFeedback content" className="bg-red-300">
            <h1 className="text-pfBlueDark text-2xl font-bold">Create New Feedback</h1>
            <Input 
              id={"feedback-title"} 
              label={"Feedback Title"} 
              description={"Add a short, descriptive headline"} 
              type={"text"} 
              name={"feedback-title"} 
              placeholder={"Please add a dark theme option"} 
              value={""} 
              onChange={handleFbTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeedBack;
