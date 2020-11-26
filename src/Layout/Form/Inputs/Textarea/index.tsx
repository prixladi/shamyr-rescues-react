import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import './index.css';
import InputBase from '../InputBase';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder: string;
};

const TextArea: React.FC<Props> = ({ required, placeholder, ...rest }: Props) => {
  const [field] = useField(rest);

  return (
    <InputBase
      component="textarea"
      type="text"
      name={field.name}
      id={field.name}
      placeholder={placeholder}
      className="textarea"
      required={required}
    />
  );
};

export default TextArea;
