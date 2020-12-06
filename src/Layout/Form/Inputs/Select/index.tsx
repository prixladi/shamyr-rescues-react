import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import './index.css';
import InputBase from '../InputBase';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  required?: boolean;
  options: { key: string; value: string }[];
  emptyOption: string;
};

const Select: React.FC<Props> = ({ required, options, emptyOption, ...rest }: Props) => {
  const [field] = useField(rest);

  let className = 'select';
  if (!field.value) {
    className += ' placeholder';
  }

  return (
    <InputBase type="text" component="select" name={field.name} placeholder={emptyOption} className={className} required={required}>
      <optgroup>
        <option hidden value="" label={emptyOption} />
        {options.map((opt) => (
          <option key={opt.key} value={opt.key} label={opt.value} />
        ))}
      </optgroup>
    </InputBase>
  );
};

export default Select;
