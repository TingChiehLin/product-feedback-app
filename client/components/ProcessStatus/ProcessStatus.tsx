import { FC } from "react";

export type ProcessType = "Planned" | "In-Progress" | "Live";

export interface ProcessTypeProp {
  title: ProcessType;
  number: number;
}

const ProcessStatus: FC<ProcessTypeProp> = ({ title, number }) => {
  const titleMapper: { [k in ProcessType]: string } = {
    Planned: "bg-pfOrangeWarm",
    "In-Progress": "bg-pfPurple",
    Live: "bg-pfBlueLight",
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex justify-between items-center">
          <div
            className={`w-2 h-2 rounded-full ${titleMapper[title]} mr-4`}
          ></div>
          <div className="text-base font-normal text-pfGrayDark">{title}</div>
        </div>
        <div className="text-base font-bold text-pfGrayDark">{number}</div>
      </div>
    </>
  );
};

export default ProcessStatus;
