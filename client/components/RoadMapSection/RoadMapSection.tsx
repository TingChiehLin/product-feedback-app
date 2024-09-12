import { FC } from "react";

import RoadmapItem, { RoadmapItemStatus } from "../RoadmapItem";
import { FeedbackData } from "@/query/useFeedback";

interface RoadMapSectionProp {
  title: string;
  subTitle: string;
  status: RoadmapItemStatus;
  data: FeedbackData[];
}

const RoadMapSection: FC<RoadMapSectionProp> = ({
  title,
  subTitle,
  status,
  data,
}) => {
  const plannedTotalCount = data.reduce(
    (acc: number, cur: FeedbackData) =>
      cur.status === "Planned" ? ++acc : acc,
    0
  );

  const inProgressTotalCount = data.reduce(
    (acc: number, cur: FeedbackData) =>
      cur.status === "In-Progress" ? ++acc : acc,
    0
  );

  const liveTotalCount = data.reduce(
    (acc: number, cur: FeedbackData) => (cur.status === "Live" ? ++acc : acc),
    0
  );

  const plannedItems = data.filter(
    (cur: FeedbackData) => cur.status === "Planned"
  );

  const inProgressItems = data.filter(
    (cur: FeedbackData) => cur.status === "In-Progress"
  );

  const liveItems = data.filter((cur: FeedbackData) => cur.status === "Live");

  return (
    <div>
      <div>
        <h4 className="text-[18px] font-bold text-pfBlueDark">
          {title}&nbsp;(
          {status === "Planned" && plannedTotalCount}
          {status === "In-Progress" && inProgressTotalCount}
          {status === "Live" && liveTotalCount})
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
              category={r.category.type}
              voteNum={r.upvote}
              comments={r.comments}
            />
          ))}
        {status === "In-Progress" &&
          inProgressItems.map((r) => (
            <RoadmapItem
              key={r.id}
              status={r.status}
              title={r.title}
              description={r.description}
              category={r.category.type}
              voteNum={r.upvote}
              comments={r.comments}
            />
          ))}
        {status === "Live" &&
          liveItems.map((r) => (
            <RoadmapItem
              key={r.id}
              status={r.status}
              title={r.title}
              description={r.description}
              category={r.category.type}
              voteNum={r.upvote}
              comments={r.comments}
            />
          ))}
      </div>
    </div>
  );
};

export default RoadMapSection;
