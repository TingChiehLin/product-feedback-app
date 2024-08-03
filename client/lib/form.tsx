import { CATEGORIES, CategoryType } from "./categories";
import { STATUS, StatusType } from "./status";

type FieldConfig = {
  value: string;
  error: string;
  validator: (value: string) => string;
};

export interface requestFormType {
  "feedback-title": FieldConfig;
  "feedback-category": CategoryType[];
  "feedback-status": StatusType[];
  "feedback-detail": FieldConfig;
}

const validateValue = (value: string) => {
  if (value.trim() === "") return "Input Field can not be empty!";
  return "";
};

export const FORMDATA: requestFormType = {
  "feedback-title": {
    value: "",
    error: "",
    validator: (value) => validateValue(value),
  },
  "feedback-category": CATEGORIES,
  "feedback-status": STATUS,
  "feedback-detail": {
    value: "",
    error: "",
    validator: (value) => validateValue(value),
  },
};
