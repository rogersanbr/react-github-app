import * as React from "react";
import { ChangeEventHandler, FunctionComponent } from "react";

interface AppInputProps {
  placeholder: string;
  type: string;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FunctionComponent<AppInputProps> = (props: AppInputProps) => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input className="form-control" {...props} />
      </div>
    </>
  );
};

export default Input;
