import React, { InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import InputError from './inputError';
import './inputBase.css';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  options: { key: string; value: string }[];
  emptyOption: string;
};

const Select = ({ required, type, placeholder, options, emptyOption, ...rest }: Props) => {
  const [field, { error }] = useField(rest);

  let className = 'user-input select';
  if (error) className += ' error-input';
  if (!field.value) className += ' placeholder';

  return (
    <div className="field-wrapper">
      <Field component="select" name={field.name} id={field.name} placeholder={emptyOption} className={className} required={required}>
        <optgroup>
          <option hidden value="" label={emptyOption} />
          {options.map((opt) => (
            <option key={opt.key} value={opt.key} label={opt.value} />
          ))}
        </optgroup>
      </Field>
      <InputError error={error} />
    </div>
  );
};

export default Select;
