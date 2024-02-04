"use client"

import {createContext} from 'react';

import {COMMENTS} from '../lib/comments';

const fbCtxValue = {
    feedbacks: COMMENTS,
    addFeedback: (feedback: any) => {},
    updateFeedback: (feedback: any, index: number) => {},
}

export const FeedbackContext = createContext(fbCtxValue);

export const FeedbackProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <FeedbackContext.Provider value={fbCtxValue}>
            {children}
        </FeedbackContext.Provider>
    )
}