"use client";

//context => share state across components
//useReducer => better state management (useState)

import { createContext, useReducer, useEffect } from "react";
import { FeedbackData, useFeedback } from "@/query/useFeedback";

type FeedbackState = {
  feedbacks: FeedbackData[];
  addFeedback: (feedback: FeedbackData) => void;
  updateFeedback: (feedback: FeedbackData, index: number) => void;
};

const fbCtxValue: FeedbackState = {
  feedbacks: [],
  addFeedback: (feedback: FeedbackData) => {},
  updateFeedback: (feedback: FeedbackData, index: number) => {},
};

// Context for feedback management
export const FeedbackContext = createContext(fbCtxValue);

// Reducer function for feedback actions
const feedbackReducer = (state: FeedbackState, action: any) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return { ...state };
    case "UPDATE_FEEDBACK":
      return { ...state };
    default:
      return state;
  }
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
      feedbackDispatch({ type: "SET_FEEDBACKS", payload: feedbackData });
    }
  }, [feedbackData]);

  console.log(feedbackData);

  return (
    <FeedbackContext.Provider value={feedbackState}>
      {children}
    </FeedbackContext.Provider>
  );
};
