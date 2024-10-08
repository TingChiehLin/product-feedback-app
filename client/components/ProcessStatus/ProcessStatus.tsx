import * as React from "react";
import { FC, useContext } from "react";
import { FeedbackContext } from "@/store/product-feedback-context";
import { FeedbackItem } from "@/query/useFeedback";

export type ProcessType = "Planned" | "In-Progress" | "Live";

export interface ProcessTypeProp {
  title: ProcessType;
}

const ProcessStatus: FC<ProcessTypeProp> = ({ title }) => {
  const fbCtx = useContext(FeedbackContext);
  const titleMapper: { [k in ProcessType]: string } = {
    Planned: "bg-pfOrangeWarm",
    "In-Progress": "bg-pfPurple",
    Live: "bg-pfBlueLight",
  };

  const plannedTotalCount = fbCtx.feedbacks.reduce(
    (acc: number, cur: FeedbackItem) =>
      cur.status === "Planned" ? ++acc : acc,
    0
  );

  const inProgressTotalCount = fbCtx.feedbacks.reduce(
    (acc: number, cur: FeedbackItem) =>
      cur.status === "In-Progress" ? ++acc : acc,
    0
  );

  const liveTotalCount = fbCtx.feedbacks.reduce(
    (acc: number, cur: FeedbackItem) => (cur.status === "Live" ? ++acc : acc),
    0
  );

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="flex justify-between items-center">
          <div
            className={`w-2 h-2 rounded-full ${titleMapper[title]} mr-4`}
          ></div>
          <div className="text-base font-normal text-pfGrayDark">{title}</div>
        </div>
        <div className="text-base font-bold text-pfGrayDark">
          {title === "Planned" && plannedTotalCount}
          {title === "In-Progress" && inProgressTotalCount}
          {title === "Live" && liveTotalCount}
        </div>
      </div>
    </>
  );
};

export default ProcessStatus;
