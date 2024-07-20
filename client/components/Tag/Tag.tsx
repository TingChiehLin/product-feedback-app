import { FC } from "react";

export interface TagPropType {
  text: string;
  isActive: boolean;
  customClass?: string;
}

const Tag: FC<TagPropType> = ({ text, isActive, customClass }) => {
  const tagStatus =
    isActive && "text-white bg-pfBlueNormal hover:bg-pfBlueNormal";
  return (
    <div
      className={`
        ${customClass}
        ${tagStatus}
        px-4 py-2 
        w-fit
        text-sm 
        flex         
        justify-center 
        items-center 
        font-semibold
        bg-pfGrayNormal hover:bg-[#CFD7FF] 
        cursor-pointer rounded-[10px]
        text-pfBlueNormal
        select-none 
      `}
    >
      <span>{text}</span>
    </div>
  );
};

export default Tag;
