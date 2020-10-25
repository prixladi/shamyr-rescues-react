import React from 'react';
import './index.css';

export type Props = {
  children?: React.ReactNode;
};

const SubmitButton = ({ children }: Props) => {
  return (
    <button className="btn" type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
