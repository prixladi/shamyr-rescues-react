import React from 'react';
import { PlaceModel } from '../../../Api';
import './index.css';

type ItemProps = { model: PlaceModel };

const Item = ({ model }: ItemProps) => {
  return (
    <div className="placeItem">
      <a>
        <h3>{model.name}</h3>
        <img src={model.imageUrl} alt={model.name} />
      </a>
    </div>
  );
};

export default Item;
