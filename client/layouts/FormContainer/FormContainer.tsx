interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[68px] max-w-[540px] mx-auto">
      {children}
    </div>
  );
};

export default FormContainer;
