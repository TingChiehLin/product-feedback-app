import { FC } from "react";

interface FeedbackDetailPropType {
  params: slugField;
}

interface slugField {
  slug: string;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = ({ params }) => {
  return <div className="bg-red-300"></div>;
};

export default FeedbackDetail;
