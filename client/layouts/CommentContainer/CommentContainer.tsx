import * as React from "react";
import axios from "axios";

import { FeedbackContext } from "@/store/product-feedback-context";

import Button from "@/components/Button";
import { useParams } from "next/navigation";
import TextField from "@/components/TextField";
import Comment from "@/components/Comment";
import { useFeedback } from "@/query/useFeedback";

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
  const { refetch } = useFeedback();
  const fbCtx = React.useContext(FeedbackContext);
  const id = String(params?.id);
  const feedbackItem = fbCtx.feedbacks.find((f) => String(f.id) === id);
  const userId = 1; //default user
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

  const handleClick = async () => {
    const commentText = values["comment-description"].value;

    if (commentText === "") {
      setValues((preState) => ({
        ...preState,
        "comment-description": {
          ...preState["comment-description"],
          error: "Comment cannot be empty",
        },
      }));
      return;
    }

    const newComment = {
      user_id: userId,
      feedback_id: id,
      description: commentText,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5555/comments",
        newComment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        fbCtx.addComment(id, response.data);
        setValues((preState) => ({
          ...preState,
          "comment-description": {
            value: "",
            error: "",
          },
        }));
        refetch();
      }
    } catch (error) {
      console.error("Error posting the comment:", error);
      setValues((preState) => ({
        ...preState,
        "comment-description": {
          ...preState["comment-description"],
          error: "Failed to post the comment. Please try again.",
        },
      }));
    }
  };

  return (
    <>
      <div className="py-6 px-8 mt-6 bg-white rounded-[10px]">
        <span className="font-bold text-[18px] text-pfBlueDark">
          {feedbackComs?.length ?? 0} Comments
        </span>
        <div>
          {feedbackComs?.map((c) => (
            <Comment
              key={c.id}
              userId={c.user_id}
              description={c.description}
            />
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
            {Math.max(0, charactersRemaining)} Characters left
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
