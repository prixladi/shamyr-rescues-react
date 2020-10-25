import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { usePlace } from '../../Hooks';
import { PlaceDetail } from '../../Components';
import { _Places } from '../../Navigation/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type Match = {
  placeId: string;
};

const Place = () => {
  const match = useRouteMatch<Match>();
  const place = usePlace(Number(match.params.placeId));

  if (place === null) {
    return null;
  }

  return (
    <PlaceDetail place={place}>
      <Link to={_Places}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to places
      </Link>
    </PlaceDetail>
  );
};

export default Place;
