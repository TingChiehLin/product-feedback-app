import { FC } from "react";

export interface TagPropType {
  text: string;
}

export const Tag: FC<TagPropType> = ({ text }) => {
  return (
    <>
      <div
        className="px-4 py-2 
        text-sm 
        flex 
        justify-center 
        items-center 
        font-semibold
      active:bg-pfBlue_darkLight
       bg-pfGray_normal hover:bg-[#CFD7FF] 
         cursor-pointer rounded-[10px]
         text-pfBlue_normal active:text-white
         "
      >
        <div>{text}</div>
      </div>
    </>
  );
};
