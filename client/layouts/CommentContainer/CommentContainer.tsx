import * as React from "react";
import { FeedbackContext } from "@/store/product-feedback-context";

import Button from "@/components/Button";
import { useParams } from "next/navigation";
import TextField from "@/components/TextField";
import Comment from "@/components/Comment";

type FormValues = {
  [key: string]: {
    value: string;
    error: string;
  };
};

const CommentContainer = () => {
  const [values, setValues] = React.useState<FormValues>({
    "comment-description": {
      value: "",
      error: "",
    },
  });

  const params = useParams();
  const fbCtx = React.useContext(FeedbackContext);
  const id = String(params?.id as string);
  const feedbackItem = fbCtx.feedbacks.find((f) => String(f.id) === id);
  const feedbackComs = feedbackItem?.comments;

  const charLimit = 250;
  const charactersRemaining =
    charLimit - values["comment-description"].value.length;

  const handleValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (value.length > charLimit) {
      setValues((preState) => ({
        ...preState,
        [name]: {
          ...preState[name],
          error: "You have reached 250 character limit.",
        },
      }));
      return;
    }

    setValues((preState) => ({
      ...preState,
      [name]: {
        value: value,
        error: "",
      },
    }));
  };

  const handleClick = () => {
    if (values["comment-description"].value === "") {
      return;
    }
    console.log("Output Value:", values);
  };

  return (
    <>
      <div className="py-6 px-8 mt-6 bg-white">
        <span className="font-bold text-[18px] text-pfBlueDark">
          {feedbackComs?.length ?? 0} Comments
        </span>
        <div>
          {feedbackComs?.map((c) => (
            <Comment key={c.id} imgURL={""} />
          ))}
        </div>
      </div>
      <div className="bg-white py-6 px-8 mt-6">
        <span className="text-[18px] font-bold text-left">Add Comment</span>
        <TextField
          id={"comment-description"}
          name={"comment-description"}
          value={values["comment-description"].value}
          rows={3}
          cols={50}
          placeholder={"Type your comment here"}
          error={values["comment-description"].error}
          onChange={handleValue}
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-pfGrayDark">
            {charactersRemaining >= 0 ? charactersRemaining : 0} Characters left
          </span>
          <Button
            text={"Post Comment"}
            variant={"Add"}
            type={"button"}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default CommentContainer;
