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
        bg-pfGrayNormal hover:bg-[#CFD7FF] 
        cursor-pointer rounded-[10px]
        text-pfBlueNormal active:text-white
        active:bg-pfBlueNormal
        select-none 
      `}
    >
      <span>{text}</span>
    </div>
  );
};

export default Tag;
