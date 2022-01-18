import * as React from 'react';
import { ChangeEventHandler, FunctionComponent } from "react";

interface InputProps {
    placeholder: string,
    type: string,
    label: string,
    name: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input className="form-control" {...props} />
            </div>
        </>
    );
}

export default Input;