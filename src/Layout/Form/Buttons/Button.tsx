import { useFormikContext } from 'formik';
import React, { MouseEventHandler } from 'react';
import './index.css';

export type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const SubmitButton = ({ onClick, children }: Props) => {
  const { isSubmitting } = useFormikContext();
  
  return (
    <button disabled={isSubmitting} className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default SubmitButton;
