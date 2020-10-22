import React from 'react';
import { Link } from 'react-router-dom';
import { PlacePreviewModel } from '../../../Api';
import { _Places } from '../../../Navigation/Routes';
import './index.css';

type ItemProps = { model: PlacePreviewModel };

const Item = ({ model }: ItemProps) => {
  return (
    <div className="placeItem">
      <Link to={`${_Places}/${model.id}`}>
        <h3>{model.name}</h3>
      </Link>
      <p>{model.shortDescription}</p>
    </div>
  );
};

export default Item;
