import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { usePlace } from '../../Hooks';
import { PlaceDetail } from '../../Components';
import { _Places } from '../../Navigation/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Content from '../../Layout/Content';

type Match = {
  placeId: string;
};

const Place: React.FC = () => {
  const match = useRouteMatch<Match>();
  const place = usePlace(Number(match.params.placeId));

  if (place === null) {
    return null;
  }

  return (
    <Content id="place-page">
      <PlaceDetail place={place}>
        <Link to={_Places}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to places
        </Link>
      </PlaceDetail>
    </Content>
  );
};

export default Place;
