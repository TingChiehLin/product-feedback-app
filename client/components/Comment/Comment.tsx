import * as React from "react";
import Image from "next/image";
import { User, useUser } from "@/query/useUser";

interface CommentProps {
  userId: number;
  description: string;
}

const Comment: React.FC<CommentProps> = ({ userId, description }) => {
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
          className="w-16 h-16 rounded-full"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="leading-snug">
              <span className="text-[14px] block font-bold text-pfBlueDark">
                {first_name + " " + last_name}
              </span>
              <span className="text-[14px] text-pfGrayDark">
                {"@" + username}
              </span>
            </div>
            <span className="text-pfBlueNormal font-semibold text-[13px] cursor-pointer">
              Reply
            </span>
          </div>
          <p className="text-pfGrayDark mt-4">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
