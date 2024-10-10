import * as React from "react";
import { usePortrait } from "@/query/usePortrait";
import Image from "next/image";

interface CommentProps {
  userId: number;
}

const Comment: React.FC<CommentProps> = ({ userId }) => {
  const { data: imageUrl } = usePortrait(String(userId));
  return (
    <>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Random User Portrait for user ${userId}`}
          width={64}
          height={64}
          className="rounded-full"
        />
      )}
    </>
  );
};

export default Comment;
