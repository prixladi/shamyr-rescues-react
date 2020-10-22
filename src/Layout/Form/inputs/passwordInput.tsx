import React, { InputHTMLAttributes } from 'react';
import InputBase from './inputBase';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder?: string;
};

const passwordInput = ({ placeholder, ...rest }: Props) => <InputBase type="password" placeholder={placeholder || 'Password'} {...rest} />;

export default passwordInput;
