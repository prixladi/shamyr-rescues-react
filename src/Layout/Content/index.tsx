import React from 'react';
import './index.css';
import ThemeSwitch from '../ThemeSwitch';
import Footer from '../Footer';

type ContentProps = {
  children?: React.ReactNode;
  hideFooter?: boolean;
};

const Content = ({ children, hideFooter }: ContentProps) => (
  <main id="content">
    <ThemeSwitch />
    {children}
    {hideFooter || <Footer />}
  </main>
);

export default Content;
