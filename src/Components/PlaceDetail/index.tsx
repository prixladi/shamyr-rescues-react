import React from 'react';
import { PlaceDetailModel } from '../../Api';
import Footer from './Footer';

type Props = {
  place: PlaceDetailModel;
  children: React.ReactNode;
};

const PlaceDetail: React.FC<Props> = ({ place, children }: Props) => (
  <div>
    <h1 className="label">{place.name}</h1>
    {place.description1 && <p>{place.description1}</p>}
    {place.imageUrl && (
      <p>
        <img src={place.imageUrl} alt={place.name} />
      </p>
    )}
    {place.description2 && <p>{place.description2}</p>}
    {place.quote && <blockquote>{place.quote}</blockquote>}
    {place.description3 && <p>{place.description3}</p>}
    <Footer place={place}>{children}</Footer>
  </div>
);

export default PlaceDetail;
