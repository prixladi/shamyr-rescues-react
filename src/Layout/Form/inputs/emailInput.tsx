import React, { InputHTMLAttributes } from 'react';
import InputBase from './inputBase';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder?: string;
};

const emailInput = ({ placeholder, ...rest }: Props) => <InputBase type="email" placeholder={placeholder || 'Email Address'} {...rest} />;

export default emailInput;
