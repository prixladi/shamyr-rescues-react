import React, { InputHTMLAttributes } from 'react';
import InputBase from '../InputBase';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder: string;
};

const TextInput = ({ ...rest }: Props) => <InputBase type="text" {...rest} />;

export default TextInput;
