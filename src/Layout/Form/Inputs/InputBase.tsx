import React, { InputHTMLAttributes } from 'react';
import { Field, useField, useFormikContext } from 'formik';
import InputError from './inputError';
import './inputBase.css';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder: string;
  type?: string;
  component?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const InputBase: React.FC<Props> = ({ required, type, placeholder, component, children, className, ...rest }: Props) => {
  const [field, { error }] = useField(rest);
  const { isSubmitting } = useFormikContext();

  let fullClassName = (className ?? '') + ' user-input';
  if (error) {
    fullClassName += ' error-input';
  }

  return (
    <div className="field-wrapper">
      <Field
        disabled={isSubmitting}
        component={component}
        type={type}
        name={field.name}
        id={field.name}
        placeholder={placeholder}
        className={fullClassName}
        required={required}
        autoComplete="on"
      >
        {children}
      </Field>
      <InputError error={error} />
    </div>
  );
};

export default InputBase;
