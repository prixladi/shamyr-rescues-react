import React from 'react';
import Form from '../../Layout/Form';
import * as yup from 'yup';
import { SubmitButton } from '../../Layout/Form/Buttons';
import { invalidUrlText, requiredText, tooLongText, tooShortText } from '../../Utils/Validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { useCountries } from '../../Hooks';
import { FormikHelpers, FormikValues } from 'formik';

const { Textarea, Select, TextInput } = Form;

type Values = FormikValues & {
  name: string;
  shortDescription: string;
  countryCode: string;
  address?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  websiteUrl?: string;
  imageUrl?: string;
  quote?: string;
};

type Props = {
  title: string;
  handleSubmit: (values: Values, helpers: FormikHelpers<Values>) => Promise<void>;
  submitText: string;
  initialValues: Values;
  type?: 'narrow' | 'normal' | 'wide';
  children?: React.ReactNode;
};

const schema = yup.object().shape({
  name: yup.string().min(5, tooShortText('Name', 5)).max(80, 'Name is too long (max 80 characters).').required(requiredText('Name')),
  shortDescription: yup.string().max(350, tooLongText('Short description', 350)).required(requiredText('Short description')),
  countryCode: yup.string().max(2).required(),
  address: yup.string().max(600, tooLongText('Address', 600)),
  description1: yup.string().max(10000, tooLongText('Description', 10000)),
  description2: yup.string().max(10000, tooLongText('Description', 10000)),
  description3: yup.string().max(10000, tooLongText('Description', 10000)),
  websiteUrl: yup.string().max(1200, tooLongText('Website URL', 1200)).url(invalidUrlText('Website URL')),
  imageUrl: yup.string().max(1200, tooLongText('Image URL', 1200)).url(invalidUrlText('Website URL')),
  quote: yup.string().max(2000, tooLongText('Quote', 2000)),
});

const leaveMessage = 'Do you wish to leave page? Changes you made may not be saved.';

const PlaceForm: React.FC<Props> = ({ title, handleSubmit, submitText, initialValues, children, type }: Props) => {
  const { getAsOptions } = useCountries();

  return (
    <div id="login-page">
      <Form<Values>
        validationSchema={schema}
        initialValues={initialValues}
        type={type}
        title={title}
        onSubmit={handleSubmit}
        leaveMessage={leaveMessage}
      >
        <TextInput name="name" placeholder="Name" required />
        <Textarea name="shortDescription" placeholder="Short Description (Will Be Displayed In List)" required />
        <Select name="countryCode" emptyOption="Select country" options={getAsOptions()} required />
        <Textarea name="description1" placeholder="First Part Of Description (Optional)" />
        <TextInput name="imageUrl" placeholder="Image URL (Optional)" />
        <Textarea name="description2" placeholder="Second Part Of Description (Optional)" />
        <Textarea name="quote" placeholder="Quote (Optional)" />
        <Textarea name="description3" placeholder="Third Part Of Description (Optional)" />
        <TextInput name="address" placeholder="Address (Optional)" />
        <TextInput name="websiteUrl" placeholder="Website URL (Optional)" />
        {children}
        <SubmitButton>
          {submitText} <FontAwesomeIcon icon={faPaw} />{' '}
        </SubmitButton>
      </Form>
    </div>
  );
};

export default PlaceForm;
