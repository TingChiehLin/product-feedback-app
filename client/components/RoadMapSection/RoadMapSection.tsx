import { FC } from "react";

import RoadmapItem, { RoadmapItemStatus } from "../RoadmapItem";
import { commentType } from "../../lib";

interface RoadMapSectionProp {
  title: string;
  subTitle: string;
  status: RoadmapItemStatus;
  data: commentType[];
}

const RoadMapSection: FC<RoadMapSectionProp> = ({
  title,
  subTitle,
  status,
  data,
}) => {
  const plannedTotalCount = data.reduce(
    (acc: number, cur: commentType) => (cur.status === "Planned" ? ++acc : acc),
    0
  );

  const InProgressTotalCount = data.reduce(
    (acc: number, cur: commentType) =>
      cur.status === "In Progress" ? ++acc : acc,
    0
  );

  const LiveTotalCount = data.reduce(
    (acc: number, cur: commentType) => (cur.status === "Live" ? ++acc : acc),
    0
  );

  const plannedItems = data.filter(
    (cur: commentType) => cur.status === "Planned"
  );

  const inProgressItems = data.filter(
    (cur: commentType) => cur.status === "In Progress"
  );

  const liveItems = data.filter((cur: commentType) => cur.status === "Live");

  return (
    <div>
      <div>
        <h4 className="text-[18px] font-bold text-pfBlueDark">
          {title}&nbsp;(
          {status === "Planned" && plannedTotalCount}
          {status === "In Progress" && InProgressTotalCount}
          {status === "Live" && LiveTotalCount})
        </h4>
        <h5 className="text-pfGrayDark mt-1">{subTitle}</h5>
      </div>
      <div className="mt-8 flex flex-col gap-6 ">
        {status === "Planned" &&
          plannedItems.map((r) => (
            <RoadmapItem
              key={r.id}
              status={r.status}
              title={r.title}
              description={r.description}
              tagName={r.tagName}
              voteNum={r.upvote}
              commentNum={r.commentNum}
            />
          ))}
        {status === "In Progress" &&
          inProgressItems.map((r) => (
            <RoadmapItem
              key={r.id}
              status={r.status}
              title={r.title}
              description={r.description}
              tagName={r.tagName}
              voteNum={r.upvote}
              commentNum={r.commentNum}
            />
          ))}
        {status === "Live" &&
          liveItems.map((r) => (
            <RoadmapItem
              key={r.id}
              status={r.status}
              title={r.title}
              description={r.description}
              tagName={r.tagName}
              voteNum={r.upvote}
              commentNum={r.commentNum}
            />
          ))}
      </div>
    </div>
  );
};

export default RoadMapSection;
