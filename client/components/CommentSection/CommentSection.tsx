import Image from "next/image";
import { FC } from "react";
import COMMENT from "../../assets/comment.svg";

interface CommentTypeProp {
  commentNum: number;
}

const CommentNumber: FC<CommentTypeProp> = ({ commentNum }) => {
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
        <span className="text-pfBlue_dark font-bold">{commentNum}</span>
      </div>
    </>
  );
};

export default CommentNumber;
