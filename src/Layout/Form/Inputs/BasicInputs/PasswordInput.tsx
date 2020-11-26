import React, { InputHTMLAttributes } from 'react';
import InputBase from '../InputBase';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder?: string;
};

const PasswordInput: React.FC<Props> = ({ placeholder, ...rest }: Props) => (
  <InputBase type="password" placeholder={placeholder || 'Password'} {...rest} />
);

export default PasswordInput;
