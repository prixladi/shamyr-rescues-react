import React from 'react';
import Navigation from '../Navigation';
import Content from '../Content';
import './index.css';

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay = ({ children }: OverlayProps) => <div id="overlay"> {children} </div>;

Overlay.Navigation = Navigation;
Overlay.Content = Content;

export default Overlay;
