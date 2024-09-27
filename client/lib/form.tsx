type FieldConfig = {
  value: string;
  error: string;
  validator: (value: string) => string;
};

type CategoryConfig = {
  value: number;
};

type StatusConfig = {
  value: string;
};

export interface RequestFormType {
  "feedback-title": FieldConfig;
  "feedback-category": CategoryConfig;
  "feedback-status": StatusConfig;
  "feedback-detail": FieldConfig;
}

const validateValue = (value: string) => {
  if (value.trim() === "") return "Input Field can not be empty!";
  return "";
};

export const FORMDATA: RequestFormType = {
  "feedback-title": {
    value: "",
    error: "",
    validator: (value) => validateValue(value),
  },
  "feedback-category": {
    value: 1,
  },
  "feedback-status": {
    value: "Planned",
  },
  "feedback-detail": {
    value: "",
    error: "",
    validator: (value) => validateValue(value),
  },
};
