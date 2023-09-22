import { FC } from "react";
import Link from "next/link";

import { FaPlus, FaAngleLeft } from "react-icons/fa";

interface FeedbackDetailPropType {}

const AddFeedBack: FC<FeedbackDetailPropType> = () => {
  const addButtonStyle = {
    background:
      "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
  };
  return (
    <>
      <div className="flex items-center flex-col">
        <div>
          <div className="flex gap-3.5 mb-[68px]">
            <Link href="/">
              <FaAngleLeft size={"1.2rem"} className="text-pfBlue_normal" />
            </Link>
            <Link href="/">
              <h4 className="font-bold text-sm hover:underline cursor-pointer text-pfGrayDark">
                Go Back
              </h4>
            </Link>
          </div>
          <div
            className="w-[540px] h-[657px] bg-white rounded-[10px] shadow
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFeedBack;
