"use client";

//context => share state across components
//useReducer => better state management (useState)

import { createContext, useReducer, useEffect } from "react";
import { FeedbackItem, useFeedback } from "@/query/useFeedback";

import LoadingImg from "@/assets/spinning-loading.svg";
import Image from "next/image";

type FeedbackState = {
  feedbacks: FeedbackItem[];
};

const fbCtxValue: FeedbackState = {
  feedbacks: [],
};

type FeedbackContextType = {
  feedbacks: FeedbackItem[];
  feedbackDispatch: React.Dispatch<any>;
};

// Create an initial context value (only the structure, no methods here)
const initialFeedbackContext: FeedbackContextType = {
  feedbacks: [],
  feedbackDispatch: () => null, // Placeholder function for dispatch
};

// Context for feedback management
export const FeedbackContext = createContext<FeedbackContextType>(
  initialFeedbackContext
);

// Reducer function for feedback actions
const feedbackReducer = (state: FeedbackState, action: any) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
      };
    case "UPDATE_FEEDBACK":
      const updatedFeedbacks = [...state.feedbacks];
      updatedFeedbacks[action.index] = action.payload;
      return {
        ...state,
        feedbacks: updatedFeedbacks,
      };
    case "DELETE_FEEDBACK": {
      const filteredFeedbacks = state.feedbacks.filter(
        (feedback) => feedback.id !== action.payload.id
      );
      return {
        ...state,
        feedbacks: filteredFeedbacks,
      };
    }
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
        <Image
          priority
          src={LoadingImg}
          width={64}
          height={64}
          alt={"loading image"}
        />
      </div>
    );

  return (
    <FeedbackContext.Provider
      value={{ feedbacks: feedbackState.feedbacks, feedbackDispatch }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
