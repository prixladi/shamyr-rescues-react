import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Item.css';

type ItemProps = {
  text: string;
  id: string;
  path: string;
};

const getFirstPart = (path: string): string => {
  const parts = path.split('/');
  return '/' + parts[1];
};

const Item: React.FC<ItemProps> = ({ text, id, path }: ItemProps) => {
  const location = useLocation();

  let classes = 'bm-item';
  if (getFirstPart(location.pathname) === path) {
    classes += ' bm-item-active';
  }

  return (
    <Link to={path} id={id} className={classes}>
      {text}
    </Link>
  );
};

export default Item;
