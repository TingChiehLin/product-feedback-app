"use client";

import { FC, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import React from "react";
import Form from "@/components/Form";
import FormContainer from "@/layouts/FormContainer";

type slugField = {
  slug: string;
};

interface FeedbackDetailPropType {
  params: slugField;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = () => {
  const params = useParams(); // Fetch dynamic route parameter (id)
  const pathname = usePathname();

  const isEditPage = pathname?.includes("edit");
  const id = params?.id as string; // Access dynamic `id` from the URL

  useEffect(() => {}, [pathname]);

  return (
    <>
      {isEditPage ? (
        <FormContainer>
          <BackButton />
          <Form />
        </FormContainer>
      ) : (
        <div className="">
          <div className="flex justify-between items-center">
            <BackButton />
            <Button
              text={"Edit Feedback"}
              variant={"Edit"}
              type={"button"}
              href={"feedback"}
              slug={id}
            />
          </div>
          <div className="w-full h-40 py-7 px-8 mt-6 bg-white rounded-[10px]"></div>
        </div>
      )}
    </>
  );
};
export default FeedbackDetail;
