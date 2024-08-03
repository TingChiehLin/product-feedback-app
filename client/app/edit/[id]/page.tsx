import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import FeedbackContainer from "@/layouts/FeedbackContainer";

const EditFeedback: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <FeedbackContainer>
      <BackButton href="/" />
      {/* <Form
        type="Add"
        title="Create New Feedback"
        onSubmit={handleSubmit}
      ></Form> */}
    </FeedbackContainer>
  );
};

export default EditFeedback;
