import * as React from "react";
import { usePortrait } from "@/query/usePortrait";
import Image from "next/image";

interface CommentProps {
  imgURL: string;
}

const Comment: React.FC<CommentProps> = ({ imgURL }) => {
  // const { data: imageUrl } = usePortrait(String(userId));
  return (
    <>
      <div className="">
        {/* {imageUrl && (
          <Image
            src={imageUrl}
            alt={`Random User Portrait for user ${userId}`}
            width={64}
            height={64}
            className="rounded-full"
          />
        )} */}
      </div>
    </>
  );
};

export default Comment;
