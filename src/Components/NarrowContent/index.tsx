import React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
};

const NarrowContent = ({ children }: Props) => <div className="inner-content">{children}</div>;

export default NarrowContent;
