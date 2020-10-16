import React, { ChangeEventHandler } from 'react';
import InputBase from './inputBase';

interface Props {
    onChange: ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
    placeholder?: string;
}

const emailInput = ({ placeholder, ...rest }: Props) => {
  return <InputBase type="email" placeholder={placeholder || "Email Address"} {...rest} />;
};

export default emailInput;
