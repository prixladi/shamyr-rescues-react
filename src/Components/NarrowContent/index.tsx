import React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
};

const NarrowContent: React.FC<Props> = ({ children }: Props) => <div className="inner-content">{children}</div>;

export default NarrowContent;
