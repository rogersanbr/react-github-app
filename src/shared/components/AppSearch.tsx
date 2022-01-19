import React, { FunctionComponent } from "react";
import AppButton from "./AppButton";
import Input from "./AppInput";

interface SearchProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Search: FunctionComponent<SearchProps> = (props: SearchProps) => {
  return (
    <>
      <Input
        label="@"
        name="username"
        placeholder="Github Account"
        type="text"
        onChange={props.handleChange}
      />
      <AppButton
        disabled={props.disabled}
        onClick={props.handleClick}
        text={"Search"}
      />
    </>
  );
};

export default Search;
