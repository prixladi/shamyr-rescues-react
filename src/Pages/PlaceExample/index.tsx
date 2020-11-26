import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PlaceDetail } from '../../Components';
import { _PlaceExampleNew } from '../../Navigation/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PlaceDetailModel } from '../../Api';
import Content from '../../Layout/Content';

const PlaceExample: React.FC = () => {
  const location = useLocation<PlaceDetailModel>();

  return (
    <Content id="place-example-page">
      <PlaceDetail place={location.state}>
        <Link to={_PlaceExampleNew}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to example
        </Link>
      </PlaceDetail>
    </Content>
  );
};

export default PlaceExample;
