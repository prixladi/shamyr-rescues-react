import React, { ChangeEventHandler } from 'react';
import InputBase from './inputBase';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
}

const passwordInput = ({ placeholder, ...rest }: Props) => {
  return <InputBase type="password" placeholder={placeholder || 'Password'} {...rest} />;
};

export default passwordInput;
