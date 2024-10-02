"use client";

import * as React from "react";

import Form from "../../components/Form";
import FormContainer from "@/layouts/FormContainer";
import BackButton from "@/components/BackButton";

const AddFeedBack: React.FC = () => {
  return (
    <FormContainer>
      <BackButton />
      <Form />
    </FormContainer>
  );
};

export default AddFeedBack;
