"use client";

import * as React from "react";

import Form from "../../components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";
import BackButton from "@/components/BackButton";

const AddFeedBack: React.FC = () => {
  return (
    <FeedbackContainer>
      <BackButton />
      <Form />
    </FeedbackContainer>
  );
};

export default AddFeedBack;
