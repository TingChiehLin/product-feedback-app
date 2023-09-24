import * as React from "react";

interface FromPropType {
    title: string;
    onSumit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FromPropType> = ({onSumit}) => {
    return (
        <form onSubmit={onSumit}>
            <h1></h1>
        
        </form>
    );
}

export default Form;