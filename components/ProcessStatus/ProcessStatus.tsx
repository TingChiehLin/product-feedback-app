import { FC } from "react";

export interface ProcessTypeProp {
  title: string;
  number: number;
}

const ProcessStatus: FC<ProcessTypeProp> = ({ title, number }) => {
  let status = "";
  if (title === "Planned") status = "bg-pfOrange_warm";
  if (title === "In-Progress") status = "bg-pfPurple";
  if (title === "Live") status = "bg-pfBLue_light";

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex justify-between items-center">
          <div className={`w-2 h-2 rounded-full ${status} mr-4`}></div>
          <div className="text-base font-normal text-pfGray_dark">{title}</div>
        </div>
        <div className="text-base font-bold text-pfGray_dark">{number}</div>
      </div>
    </>
  );
};

export default ProcessStatus;
