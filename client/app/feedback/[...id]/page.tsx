"use client";

import * as React from "react";
import { FeedbackContext } from "@/store/product-feedback-context";
import { useParams, usePathname } from "next/navigation";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Form from "@/components/Form";
import FormContainer from "@/layouts/FormContainer";
import Tag from "@/components/Tag";
import FeedbackNumber from "@/components/FeedbackNumber";
import CommentContainer from "@/layouts/CommentContainer";
import VoteSection from "@/components/VoteSection";

type slugField = {
  slug: string;
};

interface FeedbackDetailPropType {
  params: slugField;
}

const FeedbackDetail: React.FC<FeedbackDetailPropType> = () => {
  const params = useParams(); // Fetch dynamic route parameter (id)
  const pathname = usePathname();
  const fbCtx = React.useContext(FeedbackContext);

  const isEditPage = pathname?.includes("edit");
  const id = String(params?.id as string);
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
          <div className="w-full py-7 px-8 mt-6 bg-white rounded-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex justify-start gap-10">
                <VoteSection
                  voteNum={feedbackItem?.upvote}
                  fieldDirection={"vertical"}
                />
                <div>
                  <h4 className="text-[18px] text-pfBlueDark font-bold mb-1">
                    {feedbackItem?.title}
                  </h4>
                  <p className="text-pfGrayDark mb-3">
                    {feedbackItem?.description}
                  </p>
                  <div className="flex gap-2">
                    <Tag text={feedbackItem?.category.type} />
                  </div>
                </div>
              </div>
              <FeedbackNumber feedbackNum={feedbackItem?.comments.length} />
            </div>
          </div>
          <CommentContainer />
        </div>
      )}
    </>
  );
};
export default FeedbackDetail;
