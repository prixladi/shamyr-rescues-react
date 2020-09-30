import React from 'react';
import {useHistory} from 'react-router-dom';

import './Item.css';

type ItemProps = {
  text: string;
  id: string;
  path: string;
};

const Item = ({ text, id, path }: ItemProps) => {
  const history = useHistory();

  let classes = "bm-item";
  if(history.location.pathname === path)
   classes += " bm-item-active";

  return (
    <a id={id} href={path} className={classes}>
      {text}
    </a>
  );
};

export default Item;
