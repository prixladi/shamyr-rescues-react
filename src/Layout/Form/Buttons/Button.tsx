import React, { MouseEventHandler } from 'react';
import './index.css';

export type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const SubmitButton = ({  onClick, children }: Props) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default SubmitButton;
