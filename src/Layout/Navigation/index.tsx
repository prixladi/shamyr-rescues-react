import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './index.css';

type NavigationProps = {
  children: React.ReactNode;
};

const NavigationHeader = () => (
  <div className="bm-header">
    <span className="bm-title">Shamyr</span>{' '}
    <span className="bm-subtitle">
      Rescues <FontAwesomeIcon icon={faPaw} />
    </span>
  </div>
);

const NavigationFooter = () => (
  <div className="bm-footer">
    <a href="https://twitter.com">
      <FontAwesomeIcon icon={faTwitter} border />
    </a>
    <a href="https://facebook.com">
      <FontAwesomeIcon icon={faFacebook} border />
    </a>
    <a href="https://intagram.com">
      <FontAwesomeIcon icon={faInstagram} border />
    </a>
    <a href="https://pinterest.com">
      <FontAwesomeIcon icon={faPinterest} border />
    </a>
    <a href="https://github.com">
      <FontAwesomeIcon icon={faGithub} border />
    </a>
  </div>
);

const NavigationBody = ({ children }: NavigationProps) => <div>{children}</div>;

const Navigation = (props: NavigationProps) => (
  <Menu pageWrapId="layout" outerContainerId="content">
    <NavigationHeader />
    <NavigationBody {...props} />
    <NavigationFooter />
  </Menu>
);

Navigation.Item = Item;

export default Navigation;
