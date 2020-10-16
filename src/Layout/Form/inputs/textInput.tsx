import React, { ChangeEventHandler } from 'react';
import InputBase from './inputBase';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder: string;
}

const textInput = ({ ...rest }: Props) => {
  return <InputBase type="text" {...rest} />;
};

export default textInput;
