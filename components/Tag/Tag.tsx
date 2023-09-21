import { FC } from "react";

export interface TagPropType {
  text: string;
  customClass?: string;
}

const Tag: FC<TagPropType> = ({ text, customClass }) => {
  return (
    <div
      className={`
        ${customClass}
        px-4 py-2 
        w-fit
        text-sm 
        flex         
        justify-center 
        items-center 
        font-semibold
        bg-pfGray_normal hover:bg-[#CFD7FF] 
        cursor-pointer rounded-[10px]
        text-pfBlue_normal active:text-white
        active:bg-pfBlue_normal
        select-none 
      `}
    >
      <div>{text}</div>
    </div>
  );
};

export default Tag;
