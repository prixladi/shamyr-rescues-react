import React, { InputHTMLAttributes } from 'react';
import InputBase from './inputBase';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder: string;
};

const textInput = ({ ...rest }: Props) => <InputBase type="text" {...rest} />;

export default textInput;
