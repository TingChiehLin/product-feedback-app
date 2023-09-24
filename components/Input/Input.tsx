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
    onChange:(e: React.FormEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputTypeProp> = ({label, ...props}) => {
    return (
        <div className=''>
            <label className='sr-only text-sm' htmlFor={props.id}>{label}</label>
            <span className='text-pfBlueDark text-sm'>{props.description}</span>
            <input className='w-full pl-6 py-3 border-1 outline-0 rounded-[5px] mt-4' {...props}/>
        </div>
    )
}

export default Input;