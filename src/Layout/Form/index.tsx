import React from 'react';
import { TextInput, EmailInput, PasswordInput, Textarea, Select } from './Inputs';
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import { SubmitButton, Button } from './Buttons';
import './index.css';
import Options from './Options';

type Props<Values> = {
  title?: string;
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => Promise<void>;
  initialValues: Values;
  validationSchema?: any;
  children?: React.ReactNode;
};

const Form = <Values extends {}>({ title, onSubmit, initialValues, validationSchema, children }: Props<Values>) => (
  <div className="form">
    {title && <h1>{title}</h1>}
    <Formik<Values>
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  </div>
);

Form.TextInput = TextInput;
Form.EmailInput = EmailInput;
Form.PasswordInput = PasswordInput;
Form.Textarea = Textarea;
Form.Select = Select;
Form.Button = Button;
Form.SubmitButton = SubmitButton;
Form.Options = Options;

export default Form;
