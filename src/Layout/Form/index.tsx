import React, { useCallback } from 'react';
import { TextInput, EmailInput, PasswordInput, Textarea, Select } from './Inputs';
import { Formik, Form as FormikForm, FormikHelpers, FormikValues } from 'formik';
import { SubmitButton, Button } from './Buttons';
import './index.css';
import Options from './Options';
import yup from 'yup';

type Props<Values> = {
  title?: string;
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => Promise<void>;
  initialValues: Values;
  // eslint-disable-next-line
  validationSchema?: yup.ObjectSchema<any>;
  type?: 'narrow' | 'normal' | 'wide';
  children?: React.ReactNode;
};

const Form = <Values extends FormikValues>({
  title,
  onSubmit,
  initialValues,
  validationSchema,
  type,
  children,
}: Props<Values>): JSX.Element => {
  const onSubmitWrapper = useCallback(
    async (values: Values, helpers: FormikHelpers<Values>) => {
      helpers.setSubmitting(true);
      await onSubmit(values, helpers);
    },
    [onSubmit],
  );

  return (
    <div className={!type ? 'form narrow-form' : `form ${type}-form`}>
      {title && <h1>{title}</h1>}
      <Formik<Values>
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmitWrapper}
      >
        <FormikForm>{children}</FormikForm>
      </Formik>
    </div>
  );
};

Form.TextInput = TextInput;
Form.EmailInput = EmailInput;
Form.PasswordInput = PasswordInput;
Form.Textarea = Textarea;
Form.Select = Select;
Form.Button = Button;
Form.SubmitButton = SubmitButton;
Form.Options = Options;

export default Form;
