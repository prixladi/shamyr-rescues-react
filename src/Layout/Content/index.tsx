import React from 'react';
import './index.css';
import ThemeSwitch from '../ThemeSwitch';
import Footer from '../Footer';

type Props = {
  children?: React.ReactNode;
  hideFooter?: boolean;
  id: string;
};

const Content: React.FC<Props> = ({ children, hideFooter, id }: Props) => (
  <main id="content">
    <div id={id}>
      <ThemeSwitch />
      {children}
      {hideFooter || <Footer />}
    </div>
  </main>
);

export default Content;
