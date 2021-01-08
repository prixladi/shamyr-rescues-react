import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { usePlaces } from '../../../Hooks';
import { _Place, _PlaceEdit, _PlaceNew } from '../../../Navigation/Routes';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlacePreviewModel } from '../../../Api';

type LoadingProps = { hasMore: boolean };

const Loading: React.FC<LoadingProps> = ({ hasMore }: LoadingProps) => (hasMore ? <h4>Loading...</h4> : null);

type ListProps = {
  places: PlacePreviewModel[];
  hasMore: boolean;
  fetchNext: () => Promise<void>;
};

const PlaceList: React.FC<ListProps> = ({ places, hasMore, fetchNext }: ListProps) => (
  <InfiniteScroll
    style={{ overflow: 'hidden' }}
    dataLength={places.length}
    next={fetchNext}
    hasMore={hasMore}
    loader={<Loading hasMore={hasMore} />}
    className="listWrapper"
  >
    {places.map((place) => (
      <div key={place.id.toString()}>
        <h3 className="place-item">
          <Link to={_Place(place.id)}>{place.name}</Link>{' '}
          <Link to={_PlaceEdit(place.id)}>
            <FontAwesomeIcon icon={faEdit} />{' '}
          </Link>
        </h3>
      </div>
    ))}
  </InfiniteScroll>
);

type Props = {
  userId: string;
};

const UserPlaces: React.FC<Props> = ({ userId }: Props) => {
  const [places, hasMore, fetchNext] = usePlaces(true, userId);

  return (
    <div>
      <h2>
        Places you added{' '}
        <Link to={_PlaceNew}>
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </h2>
      {places.length > 0 ? (
        <PlaceList
          places={places}
          hasMore={hasMore}
          fetchNext={() => {
            return fetchNext();
          }}
        />
      ) : (
        <Loading hasMore={hasMore} />
      )}
    </div>
  );
};

export default UserPlaces;
