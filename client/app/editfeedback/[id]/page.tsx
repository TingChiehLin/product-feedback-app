"use client";

import React from "react";

import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";

const EditFeedback: React.FC = () => {
  return (
    <FeedbackContainer>
      <BackButton />
      <Form />
    </FeedbackContainer>
  );
};

export default EditFeedback;
