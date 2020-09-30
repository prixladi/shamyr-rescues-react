import React from 'react';
import './Content.css';

type ContentProps = {
  children: any;
};

const Content = ({ children }: ContentProps) => <main id="content">{children}</main>;

export default Content;
