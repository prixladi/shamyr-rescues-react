import React from 'react';
import './index.css';
import ThemeSwitch from '../ThemeSwitch';
import Footer from '../Footer';

type ContentProps = {
  children: any;
};

const Content = ({ children }: ContentProps) => (
  <main id="content">
    <ThemeSwitch />
    {children}
    <Footer />
  </main>
);

export default Content;
