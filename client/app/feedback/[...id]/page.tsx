"use client";

import { FC, useEffect, useContext } from "react";
import { useParams, usePathname } from "next/navigation";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import React from "react";
import Form from "@/components/Form";
import FormContainer from "@/layouts/FormContainer";
import Tag from "@/components/Tag";
import FeedbackNumber from "@/components/FeedbackNumber";
import CommentContainer from "@/layouts/CommentContainer";
import { FeedbackContext } from "@/store/product-feedback-context";

type slugField = {
  slug: string;
};

interface FeedbackDetailPropType {
  params: slugField;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = () => {
  const params = useParams(); // Fetch dynamic route parameter (id)
  const pathname = usePathname();
  const fbCtx = useContext(FeedbackContext);

  const isEditPage = pathname?.includes("edit");
  const id = params?.id as string;
  const feedbackItem = fbCtx.feedbacks.find((f) => String(f.id) === id);

  return (
    <>
      {isEditPage ? (
        <FormContainer>
          <BackButton />
          <Form />
        </FormContainer>
      ) : (
        <div>
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
          <div className="w-full h-40 py-7 px-8 mt-6 bg-white rounded-[10px]">
            <div className="px-8 py-7 flex items-center justify-between">
              {/* <div className="flex justify-start gap-10">
                <VoteSection voteNum={upvote} fieldDirection={"vertical"} />
                <div>
                  <h4 className="text-[18px] text-pfBlueDark font-bold mb-1">
                    {title}
                  </h4>
                  <p className="text-pfGrayDark mb-3">{description}</p>
                  <div className="flex gap-2">
                    <Tag text={category} />
                  </div>
                </div>
              </div>
              <FeedbackNumber feedbackNum={feedbackNum} /> */}
            </div>
          </div>
          <CommentContainer />
        </div>
      )}
    </>
  );
};
export default FeedbackDetail;
