import React, { InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import InputError from './inputError';
import './inputBase.css';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  placeholder: string;
};

const TextArea = ({ required, type, placeholder, ...rest }: Props) => {
  const [field, { error }] = useField(rest);

  let className = 'user-input textarea';
  if (error) className += ' error-input';

  return (
    <div className="field-wrapper">
      <Field
        component="textarea"
        type="text"
        name={field.name}
        id={field.name}
        placeholder={placeholder}
        className={className}
        required={required}
      />
      <InputError error={error} />
    </div>
  );
};

export default TextArea;
