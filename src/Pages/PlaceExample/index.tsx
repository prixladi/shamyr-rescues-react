import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PlaceDetail } from '../../Components';
import { _PlaceExampleNew } from '../../Navigation/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PlaceDetailModel } from '../../Api';

const PlaceExample = () => {
  const location = useLocation<PlaceDetailModel>();

  return (
    <PlaceDetail place={location.state}>
      <Link to={_PlaceExampleNew}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to example
      </Link>
    </PlaceDetail>
  );
};

export default PlaceExample;
