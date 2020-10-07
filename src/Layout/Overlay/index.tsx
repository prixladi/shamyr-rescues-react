import React from 'react';
import Navigation  from '../Navigation';
import Content from '../Content';
import './index.css';

type OverlayProps = {
  children: any;
};

const Overlay = ({ children }: OverlayProps) => <div id="overlay"> {children} </div>;

Overlay.Navigation = Navigation;
Overlay.Content = Content;

export default Overlay;
