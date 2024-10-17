import * as React from "react";
import Image from "next/image";
import { User, useUser } from "@/query/useUser";

interface CommentProps {
  userId: number;
}

const Comment: React.FC<CommentProps> = ({ userId }) => {
  const { data: userData } = useUser();
  const user = userData?.find((u) => u.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }
  const { first_name, last_name, username, img_url }: User = user;

  return (
    <>
      <div className="flex gap-x-8 py-8 px-6">
        <Image
          src={img_url ?? ""}
          alt={`Random User Portrait for useId: ${userId} }`}
          width="0"
          height="0"
          sizes="100vw"
          className="w-16 h-auto rounded-full"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="leading-snug">
              <span className="text-[14px] block">
                {first_name + " " + last_name}
              </span>
              <span className="text-[14px]">{"@" + username}</span>
            </div>
            <span className="text-blue-300 font-semibold text-[13px]">
              Reply
            </span>
          </div>
          <p className="text-pfGrayDark mt-4">{}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
