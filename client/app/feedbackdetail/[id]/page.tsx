"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import React from "react";

type slugField = {
  slug: string;
};

interface FeedbackDetailPropType {
  params: slugField;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = () => {
  const params = useParams(); // Fetch dynamic route parameter (id)
  // const searchParams = useSearchParams(); // Fetch query parameters

  const id = params?.id as string; // Access dynamic `id` from the URL
  // useSeaarams
  // const slug = searchParams.get("slug"); // Access `slug` from query

  return (
    <>
      <div className="flex justify-between items-center">
        <BackButton />
        <Button
          text={"Edit Feedback"}
          variant={"Edit"}
          type={"button"}
          href={"editfeedback"}
          slug={id}
        />
      </div>
      <div className="w-full h-40 py-7 px-8 mt-6 bg-white rounded-[10px]"></div>
      {/* <p>Hello: {id}</p>
      <p>Slug:{slug}</p> */}
    </>
  );
};

export default FeedbackDetail;
