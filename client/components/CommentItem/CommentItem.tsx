import Tag from "../Tag";
import CommentSection from "../CommentSection";
import VoteSection from "../VoteTag";

interface CommentItemProp {
  title: string;
  description: string;
  voteNum: number;
  tagName: string;
  commentNum: number;
}

const CommentItem: React.FC<CommentItemProp> = ({
  title,
  description,
  voteNum,
  tagName,
  commentNum,
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
              <Tag text={tagName} />
            </div>
          </div>
        </div>
        <CommentSection commentNum={commentNum} />
      </div>
    </div>
  );
};

export default CommentItem;
