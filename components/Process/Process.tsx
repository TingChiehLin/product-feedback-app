import { FC } from "react";

export interface ProcessTypeProp {
  title: string;
  number: number;
}
//: FC<ProcessTypeProp>
export const Process: FC<ProcessTypeProp> = ({ title, number }) => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex justify-between items-center">
          <div className="w-2 h-2 rounded-full bg-pfOrange_warm mr-4"></div>
          <div className="text-base font-normal text-pfGray_dark">{title}</div>
        </div>
        <div className="text-base font-bold text-pfGray_dark">{number}</div>
      </div>
    </>
  );
};
