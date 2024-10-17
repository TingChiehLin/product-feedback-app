import * as React from "react";
import Image from "next/image";
import { useUser } from "@/query/useUser";

interface CommentProps {
  userId: number;
}

const Comment: React.FC<CommentProps> = ({ userId }) => {
  const { data: userData } = useUser();
  const user = userData?.find((u) => u.id === userId);
  const imgURL = user?.img_url;

  return (
    <>
      <div className="">
        <Image
          src={imgURL ?? ""}
          alt={`Random User Portrait for useId: ${userId} }`}
          width="0"
          height="0"
          sizes="100vw"
          className="w-16 h-auto rounded-full"
        />
      </div>
    </>
  );
};

export default Comment;
