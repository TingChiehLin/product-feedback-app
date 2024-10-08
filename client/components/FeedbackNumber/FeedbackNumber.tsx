import Image from "next/image";
import { FC } from "react";
import COMMENT from "../../assets/comment.svg";

interface CommentTypeProp {
  feedbackNum: number | undefined;
}

const FeedbackNumber: FC<CommentTypeProp> = ({ feedbackNum }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Image
          className="w-[18px] h-4"
          src={COMMENT}
          alt="comment"
          width={18}
          height={16}
        />
        <span className="text-pfBlue_dark font-bold">{feedbackNum}</span>
      </div>
    </>
  );
};

export default FeedbackNumber;
