import React, { InputHTMLAttributes } from 'react';
import './inputError.css';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const InputError = ({ error }: Props) => {
  if (!error) return null;

  return <div className="inputError">{error}</div>;
};

export default InputError;
