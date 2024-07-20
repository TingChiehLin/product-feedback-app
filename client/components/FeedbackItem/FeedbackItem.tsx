import Tag from "../Tag";
import FeedbackNumber from "../FeedbackNumber";
import VoteSection from "../VoteTag";

interface FeedbackItemProp {
  title: string;
  description: string;
  voteNum: number;
  tagName: string;
  isActive: boolean;
  feedbackNum: number;
}

const FeedbackItem: React.FC<FeedbackItemProp> = ({
  title,
  description,
  voteNum,
  tagName,
  isActive,
  feedbackNum,
}) => {
  return (
    <div className="w-full mt-5 shadow bg-white rounded-[10px] cursor-pointer">
      <div className="px-8 py-7 flex items-center justify-between">
        <div className="flex justify-start gap-10">
          <VoteSection voteNum={voteNum} fieldDirection={"vertical"} />
          <div className="">
            <h4 className="text-[18px] text-pfBlueDark font-bold mb-1">
              {title}
            </h4>
            <p className="text-pfGrayDark mb-3">{description}</p>
            <div className="flex gap-2">
              <Tag text={tagName} isActive={isActive} />
            </div>
          </div>
        </div>
        <FeedbackNumber feedbackNum={feedbackNum} />
      </div>
    </div>
  );
};

export default FeedbackItem;
