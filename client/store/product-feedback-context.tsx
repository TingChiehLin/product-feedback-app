"use client";

//context => share state across components
//useReducer => better state management (useState)

import { createContext, useReducer, useEffect } from "react";
import { FeedbackData, useFeedback } from "@/query/useFeedback";

import LoadingImg from "@/assets/spinning-loading.svg";
import Image from "next/image";

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
      return {
        ...state,
        feedback: [...state.feedbacks, action.payload],
      };
    case "UPDATE_FEEDBACK":
      const updatedFeedbacks = [...state.feedbacks];
      updatedFeedbacks[action.index] = action.payload;
      return {
        ...state,
        feedbacks: updatedFeedbacks,
      };
    case "SET_FEEDBACKS":
      return {
        ...state,
        feedbacks: action.payload,
      };
    default:
      return state;
  }
};

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: feedbackData, isLoading } = useFeedback();
  const [feedbackState, feedbackDispatch] = useReducer(
    feedbackReducer,
    fbCtxValue
  );

  useEffect(() => {
    if (feedbackData) {
      feedbackDispatch({ type: "SET_FEEDBACKS", payload: feedbackData });
    }
  }, [feedbackData]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Image src={LoadingImg} width={64} height={64} alt={"loading image"} />
      </div>
    );

  return (
    <FeedbackContext.Provider value={feedbackState}>
      {children}
    </FeedbackContext.Provider>
  );
};
