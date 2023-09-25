import { error } from "console";

interface TextFieldTypeProp {
    id: string;
    label: string;
    name: string;
    value: string;
    rows: number;
    cols: number;
    placeholder?: string;
    description?: string;
    iserror: boolean;
    onChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField:React.FC<TextFieldTypeProp> = ({...props}) => {
    return (
        <div>
            <label className="text-sm font-bold" htmlFor={props.id}>{props.label}</label>
            <span className="text-pfBlueDark text-sm block mt-1">{props.description}</span>
            <textarea className={`${props.iserror && "border-error"} 
                                    border-1 
                                    w-full
                                    overflow-auto 
                                    outline-none 
                                    resize-none
                                    text-pfBlueDark
                                    text-sm
                                    px-6 py-3 
                                    mt-4
                                    rounded-[5px] 
                                  bg-pfGrayLight`} 
                                {...props}
            >
            </textarea>
            {props.iserror && <span className="text-sm text-error block mt-1">Can’t be empty</span>}
        </div>
    )
}

export default TextField;