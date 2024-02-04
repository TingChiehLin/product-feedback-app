"use client"

//context => share state across components
//useReducer => better state management (useState)

import {createContext, useReducer} from 'react';

import {COMMENTS} from '../lib/comments';

const fbCtxValue = {
    feedbacks: COMMENTS,
    addFeedback: (feedback: any) => {},
    updateFeedback: (feedback: any, index: number) => {},
}

export const FeedbackContext = createContext(fbCtxValue);

const feedbackReducer = (state: any, action: any) => {
    
    return state;
}

export const FeedbackProvider = ({children}: {children: React.ReactNode}) => {
    const [feedbackState, feedbackDispatch] = useReducer(feedbackReducer, fbCtxValue);

    return (
        <FeedbackContext.Provider value={feedbackState}>
            {children}
        </FeedbackContext.Provider>
    )
}