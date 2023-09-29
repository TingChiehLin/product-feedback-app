import { type } from "os";
import * as React from "react";
import { FaPlus } from "react-icons/fa";

type FormType = "Add" | "Edit";

interface FormPropType {
    title: string;
    type: FormType;  
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormPropType> = ({title, children, onSubmit}) => {

    const addButtonStyle = {
        background:
          "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
      };

    return (
        <form onSubmit={onSubmit} 
              className="w-full max-w-[540px] 
                         rounded-[10px] shadow
                         px-[42px] pt-[52px] pb-10
                         relative bg-white
                        "
        >
            <div
                className="w-14 h-14 rounded-full absolute -top-7 left-[42px] cursor-pointer 
                            flex justify-center items-center"
                style={addButtonStyle}
                >
                <FaPlus size={"1rem"} color={"white"} className="" />
            </div>
            <h1 className="text-pfBlueDark text-2xl font-bold mb-10">{title}</h1>
            <div className="flex flex-col gap-y-6">
                {children}
            </div>
        </form>
    );
}

export default Form;
