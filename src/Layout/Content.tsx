import React from 'react';
import './Content.css';
import ThemeSwitch from './ThemeSwitch';

type ContentProps = {
  children: any;
};

const Content = ({ children }: ContentProps) => <main id="content"><ThemeSwitch />{children}</main>;

export default Content;
