import { FC } from "react";

export interface TagPropType {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  customClass?: string;
}

const Tag: FC<TagPropType> = ({ text, isActive, onClick, customClass }) => {
  const tagStatus = isActive
    ? "text-white bg-pfBlueNormal hover:bg-pfBlueNormal"
    : "text-pfBlueNormal bg-pfGrayNormal hover:bg-[#CFD7FF]";

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
        cursor-pointer rounded-[10px]
        select-none 
      `}
      onClick={onClick}
    >
      <span>{text}</span>
    </div>
  );
};

export default Tag;
