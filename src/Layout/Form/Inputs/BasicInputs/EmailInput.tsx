import React, { InputHTMLAttributes } from 'react';
import InputBase from '../InputBase';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder?: string;
};

const EmailInput: React.FC<Props> = ({ placeholder, ...rest }: Props) => (
  <InputBase type="email" placeholder={placeholder || 'Email Address'} {...rest} />
);

export default EmailInput;
