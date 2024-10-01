interface FeedbackContainerProps {
  children: React.ReactNode;
}

const FeedbackContainer: React.FC<FeedbackContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[68px] max-w-[540px] mx-auto">
      {children}
    </div>
  );
};

export default FeedbackContainer;
