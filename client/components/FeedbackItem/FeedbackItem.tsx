import Tag from "../Tag";
import FeedbackNumber from "../FeedbackNumber";
import VoteSection from "../VoteTag";
import Link from "next/link";

interface FeedbackItemProp {
  title: string;
  description: string;
  upvote: number;
  category: string;
  feedbackNum: number;
}

const FeedbackItem: React.FC<FeedbackItemProp> = ({
  title,
  description,
  upvote,
  category,
  feedbackNum,
}) => {
  return (
    <div className="w-full mt-5 shadow bg-white rounded-[10px] cursor-pointer">
      <div className="px-8 py-7 flex items-center justify-between">
        <div className="flex justify-start gap-10">
          <VoteSection voteNum={upvote} fieldDirection={"vertical"} />
          <div className="">
            <h4 className="text-[18px] text-pfBlueDark font-bold mb-1">
              {title}
            </h4>
            <p className="text-pfGrayDark mb-3">{description}</p>
            <div className="flex gap-2">
              <Tag text={category} />
            </div>
          </div>
        </div>
        <Link href={`/feedbackdetail/${title}`}>
          <FeedbackNumber feedbackNum={feedbackNum} />
        </Link>
      </div>
    </div>
  );
};

export default FeedbackItem;
