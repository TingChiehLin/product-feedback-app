import { FC } from "react";
import FeedbackNumber from "../FeedbackNumber";
import Tag from "../Tag";
import VoteSection from "../VoteTag";

export type RoadmapItemStatus = "Planned" | "In Progress" | "Live";

interface RoadmapItemProp {
  status: RoadmapItemStatus;
  title: string;
  description: string;
  tagName: string;
  voteNum: number;
  commentNum: number;
}

const bgColorMapper: { [key in RoadmapItemStatus]: string } = {
  Planned: "bg-pfOrangeWarm",
  "In Progress": "bg-pfPink",
  Live: "bg-pfBlueLight",
};

const LineColorMapper: { [key in RoadmapItemStatus]: string } = {
  Planned: "border-pfOrangeWarm",
  "In Progress": "border-pfPink",
  Live: "border-pfBlueLight",
};

const RoadmapItem: FC<RoadmapItemProp> = ({
  status,
  title,
  description,
  tagName,
  voteNum,
  commentNum,
}) => {
  const bgColor = bgColorMapper[status];
  const borderColor = LineColorMapper[status];

  return (
    <div
      className={`w-full max-w-[350px] h-full px-8 pt-6 pb-8
                  rounded-md
                  border-t-[6px] ${borderColor}
                bg-white
                `}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className={`w-2 h-2 ${bgColor} rounded-full`}></div>
        <span className="text-base text-pfGrayDark">{status}</span>
      </div>
      <div className="mb-4">
        <h4 className="text-lg text-pfBlueDark font-bold mb-1">{title}</h4>
        <p className="text-base text-pfGrayDark">{description}</p>
      </div>
      <Tag text={tagName} isActive={false} />
      <div className="mb-4"></div>
      <div className="flex justify-between">
        <VoteSection voteNum={voteNum} fieldDirection={"horizental"} />
        <FeedbackNumber feedbackNum={commentNum} />
      </div>
    </div>
  );
};

export default RoadmapItem;
