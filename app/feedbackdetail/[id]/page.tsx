import { FC } from "react";

interface FeedbackDetailPropType {
  params: slugField;
}

interface slugField {
  slug: string;
}

const FeedbackDetail: FC<FeedbackDetailPropType> = ({ params }) => {
  return (
    <>
      <div>Feedback Detail</div>
    </>
  );
};

export default FeedbackDetail;
