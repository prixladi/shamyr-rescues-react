import React from 'react';
import { useLocation } from 'react-router-dom';

import './Item.css';

type ItemProps = {
  text: string;
  id: string;
  path: string;
};

const Item = ({ text, id, path }: ItemProps) => {
  const location = useLocation();

  let classes = 'bm-item';
  if (location.pathname === path) classes += ' bm-item-active';

  return (
    <a href={path} id={id} className={classes}>
      {text}
    </a>
  );
};

export default Item;
