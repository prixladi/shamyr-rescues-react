import { useFormikContext } from 'formik';
import React from 'react';
import './index.css';

export type Props = {
  children?: React.ReactNode;
};

const SubmitButton: React.FC<Props> = ({ children }: Props) => {
  const { isSubmitting } = useFormikContext();

  return (
    <button disabled={isSubmitting} className="btn" type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
