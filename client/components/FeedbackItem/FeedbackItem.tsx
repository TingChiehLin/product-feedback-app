import Tag from "../Tag";
import FeedbackNumber from "../FeedbackNumber";
import VoteSection from "../VoteSection";
import Link from "next/link";

interface FeedbackItemProp {
  id: number;
  title: string;
  description: string;
  upvote: number;
  category: string;
  feedbackNum: number;
}

const FeedbackItem: React.FC<FeedbackItemProp> = ({
  id,
  title,
  description,
  upvote,
  category,
  feedbackNum,
}) => {
  return (
    <div className="w-full mt-5 px-8 py-7 shadow bg-white rounded-[10px]">
      <div className="grid grid-cols-8 items-center justify-between">
        <div className="col-start-1 col-end-2">
          <VoteSection voteNum={upvote} fieldDirection={"vertical"} />
        </div>
        <div className="flex justify-start gap-10 col-start-2 col-end-7 col-span-6">
          <div>
            <Link
              className="cursor-pointer"
              // href={`/feedbackdetail/${id}?slug=${id}`}
              href={`/feedback/${id}`}
            >
              <h4 className="text-[18px] text-pfBlueDark font-bold mb-1">
                {title}
              </h4>
              <p className="text-pfGrayDark mb-3">{description}</p>
            </Link>
            <div className="flex gap-2">
              <Tag text={category} />
            </div>
          </div>
        </div>
        {/* <Link
          href={{
            pathname: `/feedbackdetail/${id}`,
            query: {
              slug: id,
            },
          }}
        >
          <FeedbackNumber feedbackNum={feedbackNum} />
        </Link> */}
        <Link className="cursor-pointer col-end-9" href={`/feedback/${id}`}>
          <FeedbackNumber feedbackNum={feedbackNum} />
        </Link>
      </div>
    </div>
  );
};

export default FeedbackItem;
