"use client";

//context => share state across components
//useReducer => better state management (useState)

import { createContext, useReducer, useEffect } from "react";
import { useFeedback } from "@/query/useFeedback";

// import { COMMENTS } from "../lib/comments";

const fbCtxValue = {
  feedbacks: [],
  addFeedback: (feedback: any) => {},
  updateFeedback: (feedback: any, index: number) => {},
};

export const FeedbackContext = createContext(fbCtxValue);

const feedbackReducer = (state: any, action: any) => {
  return state;
};

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: feedbackData } = useFeedback();
  const [feedbackState, feedbackDispatch] = useReducer(
    feedbackReducer,
    fbCtxValue
  );

  useEffect(() => {
    if (feedbackData) {
      feedbackDispatch({});
    }
  }, [feedbackData]);

  return (
    <FeedbackContext.Provider value={feedbackState}>
      {children}
    </FeedbackContext.Provider>
  );
};
