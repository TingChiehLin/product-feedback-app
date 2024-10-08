import * as React from "react";
import { FeedbackContext } from "@/store/product-feedback-context";

import Button from "@/components/Button";
import { useParams } from "next/navigation";
import TextField from "@/components/TextField";

const CommentContainer = () => {
  const [values, setValues] = React.useState({
    "comment-description": {
      value: "",
      error: "",
    },
  });
  const params = useParams();
  const fbCtx = React.useContext(FeedbackContext);
  const id = String(params?.id as string);
  const feedbackItem = fbCtx.feedbacks.find((f) => String(f.id) === id);
  const feedbackComs = feedbackItem?.comments.length;

  const handleValue = () => {
    // setValues()
  };

  return (
    <>
      <div className="py-6 px-8 mt-6 bg-white">
        <span className="font-bold text-[18px] text-pfBlueDark">
          {feedbackComs} Comments
        </span>
        <div>Comment items</div>
      </div>
      <div className="bg-white py-6 px-8 mt-6">
        <span className="text-[18px] font-bold text-left">Add Comment</span>
        <TextField
          id={"comment-description"}
          name={"comment-description"}
          value={values["comment-description"].value}
          rows={4}
          cols={50}
          placeholder={"Type your comment here"}
          error={values["comment-description"].error}
          onChange={handleValue}
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-pfGrayDark">250 Characters left</span>
          <Button text={"Post Comment"} variant={"Add"} type={"button"} />
        </div>
      </div>
    </>
  );
};

export default CommentContainer;
