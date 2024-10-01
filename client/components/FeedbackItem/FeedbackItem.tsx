import Tag from "../Tag";
import FeedbackNumber from "../FeedbackNumber";
import VoteSection from "../VoteTag";
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
    <div className="w-full mt-5 shadow bg-white rounded-[10px]">
      <div className="px-8 py-7 flex items-center justify-between">
        <div className="flex justify-start gap-10">
          <VoteSection voteNum={upvote} fieldDirection={"vertical"} />
          <div>
            <Link
              className="cursor-pointer"
              // href={`/feedbackdetail/${id}?slug=${id}`}
              href={`/feedbackdetail/${id}`}
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
        <Link
          className="cursor-pointer"
          href={`/feedbackdetail/${id}?slug=${id}`}
        >
          <FeedbackNumber feedbackNum={feedbackNum} />
        </Link>
      </div>
    </div>
  );
};

export default FeedbackItem;
