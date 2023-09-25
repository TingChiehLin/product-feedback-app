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
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputTypeProp> = ({...props}) => {
    return (
        <div className=''>
            <label className='font-bold text-pfBlueDark text-sm' htmlFor={props.id}>{props.label}</label>
            <span className='text-pfBlueDark text-sm block mt-1'>{props.description}</span>
            <input className='w-full pl-6 py-3 
                              border-1 outline-0 rounded-[5px] 
                              mt-4 bg-pfGrayLight'
                              {...props}
            />
        </div>
    )
}

export default Input;