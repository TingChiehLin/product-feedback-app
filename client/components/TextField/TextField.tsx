import { error } from "console";

interface TextFieldTypeProp {
  id: string;
  label?: string;
  name: string;
  value: string;
  rows: number;
  cols: number;
  placeholder?: string;
  description?: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField: React.FC<TextFieldTypeProp> = ({ ...props }) => {
  const isinvalid = props.error !== "";

  return (
    <div>
      <label className="text-pfBlueDark text-sm font-bold" htmlFor={props.id}>
        {props.label}
      </label>
      <span className="text-pfGrayDark text-sm block mt-1">
        {props.description}
      </span>
      <textarea
        className={`${isinvalid && "border-error border-2"} 
                                    w-full
                                    overflow-auto 
                                    outline-0
                                    resize-none
                                    text-pfBlueDark
                                    px-6 py-3 
                                    mt-4
                                    text-[15px]
                                    rounded-[5px] 
                                  bg-pfGrayLight`}
        {...props}
      ></textarea>
      {isinvalid && (
        <span className="text-sm text-error block">{props.error}</span>
      )}
    </div>
  );
};

export default TextField;
