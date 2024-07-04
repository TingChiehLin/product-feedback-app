import { type } from 'os';
import * as React from 'react';

interface InputTypeProp {
    id: string;
    label: string;
    description: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    error: any;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputTypeProp> = ({...props}) => {
    const isinvalid = props.error !== "";
    return (
        <div className=''>
            <label className='font-bold text-pfBlueDark text-sm' htmlFor={props.id}>{props.label}</label>
            <span className='text-pfGrayDark text-sm block mt-1'>{props.description}</span>
            <input className={`w-full pl-6 py-3 
                              text-[15px]
                              border-1 outline-0 rounded-[5px] 
                              text-pfBlueDark 
                              mt-4 bg-pfGrayLight ${isinvalid && "border-error border-2"}
                              {...props}`}
                    {...props}
            />
            {isinvalid && <span className="text-sm text-error block mt-2">{props.error}</span>}
        </div>
    )
}

export default Input;