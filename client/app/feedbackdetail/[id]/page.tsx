"use client";

import { FC } from "react";
import { useParams, useSearchParams } from "next/navigation";

type slugField = {
  slug: string;
};

interface FeedbackDetailPropType {
  params: slugField;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = () => {
  const params = useParams(); // Fetch dynamic route parameter (id)
  const searchParams = useSearchParams(); // Fetch query parameters

  const id = params?.id as string; // Access dynamic `id` from the URL
  const slug = searchParams?.get("slug"); // Access `slug` from query

  return (
    <>
      <div className=" bg-green-300 text-2xl">
        <p>Hello: {id}</p>
        <p>{slug}</p>
      </div>
    </>
  );
};

export default FeedbackDetail;
