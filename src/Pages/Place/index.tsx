import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { usePlace } from '../../Hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faArrowLeft, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { _Places } from '../../Navigation/Routes';
import { PlaceDetailModel } from '../../Api';
import useCountries from '../../Hooks/useCountries';

type Props = {
  place: PlaceDetailModel;
};

const Footer = ({ place }: Props) => {
  const { getName } = useCountries();
  const countryName = getName(place.countryCode);

  return (
    <div id="place-page">
      <p>
        {place.websiteUrl && (
          <>
            <a href={place.websiteUrl}>
              <FontAwesomeIcon icon={faPaperclip} /> Website
            </a>
            <br />
          </>
        )}

        {place.address && (
          <>
            <a href={`http://maps.google.com/?q=${place.address}+${countryName}`}>
              <FontAwesomeIcon icon={faAddressBook} /> {place.address}, {countryName}
            </a>
            <br />
          </>
        )}

        <Link to={_Places}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to places
        </Link>
      </p>
    </div>
  );
};

type Match = {
  placeId: string;
};

const Item = () => {
  const match = useRouteMatch<Match>();
  const place = usePlace(Number(match.params.placeId));

  if (place === null) return <div />;

  return (
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
      <Footer place={place} />
    </div>
  );
};

export default Item;
