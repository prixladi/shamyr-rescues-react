import React, { FormEventHandler } from 'react';
import { TextInput, EmailInput, PasswordInput } from './Inputs';
import SubmitButton from './SubmitButton';
import './index.css';

type Props = {
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children?: any;
};

const Form = ({ title, onSubmit, children }: Props) => {
  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

Form.TextInput = TextInput;
Form.EmailInput = EmailInput;
Form.PasswordInput = PasswordInput;
Form.SubmitButton = SubmitButton;

export default Form;
