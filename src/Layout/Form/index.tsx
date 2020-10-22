import React from 'react';
import { TextInput, EmailInput, PasswordInput } from './Inputs';
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import SubmitButton from './SubmitButton';
import './index.css';

type Props<Values> = {
  title: string;
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => Promise<void>;
  initialValues: Values;
  validationSchema?: any;
  children?: any;
};

const Form = <Values extends {}>({ title, onSubmit, initialValues, validationSchema, children }: Props<Values>) => {
  return (
    <div className="form">
      <h1>{title}</h1>
      <Formik<Values> validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
        <FormikForm>{children}</FormikForm>
      </Formik>
    </div>
  );
};

Form.TextInput = TextInput;
Form.EmailInput = EmailInput;
Form.PasswordInput = PasswordInput;
Form.SubmitButton = SubmitButton;

export default Form;
