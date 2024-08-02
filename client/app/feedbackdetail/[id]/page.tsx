import { FC } from "react";

interface FeedbackDetailPropType {
  params: slugField;
}

interface slugField {
  slug: string;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = ({ params }) => {
  return <div className=""></div>;
};

export default FeedbackDetail;
