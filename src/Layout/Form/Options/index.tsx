import React from 'react';
import './index.css';

type Props = {
    children: any;
}

const Options = ({ children }: Props) => <div className="options">{children}</div>;

export default Options;
