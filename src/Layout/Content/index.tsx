import React from 'react';
import './index.css';
import ThemeSwitch from '../ThemeSwitch';
import Footer from '../Footer';

type ContentProps = {
  children?: React.ReactNode;
  hideFooter?: boolean;
  id: string;
};

const Content = ({ children, hideFooter, id }: ContentProps) => (
  <main id="content">
    <div id={id}>
      <ThemeSwitch />
      {children}
      {hideFooter || <Footer />}
    </div>
  </main>
);

export default Content;
