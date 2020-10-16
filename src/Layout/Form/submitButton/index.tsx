import React from 'react';
import './index.css';

export type Props = {
  value: string
};

const SubmitButton = ({ value }: Props) => {
  return <input className="btn" type="submit" value={value} />;
};

export default SubmitButton;
