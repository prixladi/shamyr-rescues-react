import React, { useCallback, useEffect } from 'react';
import { TextInput, EmailInput, PasswordInput, Textarea, Select } from './Inputs';
import { Formik, Form as FormikForm, FormikHelpers, FormikValues, FormikProps } from 'formik';
import { SubmitButton, Button } from './Buttons';
import './index.css';
import Options from './Options';
import yup from 'yup';
import { Prompt } from 'react-router-dom';

type Props<Values> = {
  title?: string;
  onSubmit: (values: Values, helpers: FormikHelpers<Values>) => Promise<void>;
  initialValues: Values;
  // eslint-disable-next-line
  validationSchema?: yup.ObjectSchema<any>;
  type?: 'narrow' | 'normal' | 'wide';
  leaveMessage?: string;
  children?: React.ReactNode;
};

type PromptProps = {
  leaveMessage?: string;
  when: boolean;
};

const LeavePrompt: React.FC<PromptProps> = ({ leaveMessage, when }: PromptProps) => {
  useEffect(() => {
    if (when && !!leaveMessage) {
      window.onbeforeunload = () => true;
      return () => {
        window.onbeforeunload = null;
      };
    }

    window.onbeforeunload = null;
  }, []);

  if (!leaveMessage || !when) {
    return null;
  }

  return <Prompt message={leaveMessage} when={when} />;
};

const Form = <Values extends FormikValues>({
  title,
  onSubmit,
  initialValues,
  validationSchema,
  type,
  leaveMessage,
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
        {({ dirty, isSubmitting }: FormikProps<Values>) => (
          <>
            <LeavePrompt leaveMessage={leaveMessage} when={dirty && !isSubmitting} />
            <FormikForm>{children}</FormikForm>
          </>
        )}
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
