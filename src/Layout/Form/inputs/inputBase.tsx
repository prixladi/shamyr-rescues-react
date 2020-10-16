import React, { ChangeEventHandler } from 'react';
import './inputBase.css';

export type InputBaseProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  type: string;
  placeholder: string;
};

const InputBase = ({ onChange, required, type, placeholder }: InputBaseProps) => {
  return <input type={type} placeholder={placeholder} className="user-input" required={required} onChange={onChange} />;
};

export default InputBase;
