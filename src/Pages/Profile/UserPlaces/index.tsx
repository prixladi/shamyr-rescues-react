import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { usePlaces } from '../../../Hooks';
import { _Places } from '../../../Navigation/Routes';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

const UserPlaces = () => {
  const [places, hasMore, fetchNext] = usePlaces(true);

  return (
    <div>
      <h2>
        Your added places{' '}
        <Link to={`${_Places}/new`}>
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </h2>
      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={places.length}
        next={fetchNext}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className="listWrapper"
      >
        {places.map((place) => (
          <div>
            <h3 className="place-item">
              <Link to={`${_Places}/${place.id}`}>{place.name}</Link>{' '}
              <Link to={`${_Places}/${place.id}/edit`}>
                <FontAwesomeIcon icon={faEdit} />{' '}
              </Link>
            </h3>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default UserPlaces;
