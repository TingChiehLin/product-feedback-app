import { FC } from "react";
import CommentSection from "../CommentSection";
import Tag from "../Tag";
import VoteSection from "../VoteSection";

interface RoadmapItemProp {
  status: string;
  title: string;
  description: string;
  tagName: string;
  voteNum: number;
  commentNum: number;
}

const RoadmapItem: FC<RoadmapItemProp> = ({
  status,
  title,
  description,
  tagName,
  voteNum,
  commentNum,
}) => {
  const borderColor =
    status === "Planned"
      ? "border-pfOrange_warm"
      : status === "In Progress"
      ? "border-pfPink"
      : "border-pfBLue_light";

  const bgColor =
    status === "Planned"
      ? "bg-pfOrange_warm"
      : status === "In Progress"
      ? "bg-pfPink"
      : "bg-pfBLue_light";

  return (
    <div
      className={`w-full max-w-[350px] h-[272px] px-8 pt-6 pb-8
                 rounded-md
                 border-t-[6px] ${borderColor}
                 bg-white
               `}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className={`w-2 h-2 ${bgColor} rounded-full`}></div>
        <span className="text-base text-pfGray_dark">{status}</span>
      </div>
      <div className="mb-4">
        <h4 className="text-lg text-pfBlue_dark font-bold mb-1">{title}</h4>
        <p className="text-base text-pfGray_dark">{description}</p>
      </div>
      <Tag text={tagName} />
      <div className="mb-4"></div>
      <div className="flex justify-between">
        <VoteSection voteNum={voteNum} fieldDirection={"horizental"} />
        <CommentSection commentNum={commentNum} />
      </div>
    </div>
  );
};

export default RoadmapItem;
