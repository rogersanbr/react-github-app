import React, { ComponentProps, FunctionComponent } from 'react'
import { Button } from "react-bootstrap";

interface AppButtonProps extends ComponentProps<typeof Button> {
    text: string,
}

const AppButton: FunctionComponent<AppButtonProps> = (props: AppButtonProps) => {
    return (<Button {...props}>{props.text}</Button>);
}

export default AppButton;