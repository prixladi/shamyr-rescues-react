import React from 'react';
import './Overlay.css';

type OverlayProps = {
  children: any;
};

const Overlay = ({ children }: OverlayProps) => <div id="overlay"> {children} </div>;

export default Overlay;
