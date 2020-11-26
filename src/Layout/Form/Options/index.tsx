import React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
};

const Options: React.FC<Props> = ({ children }: Props) => <div className="options">{children}</div>;

export default Options;
