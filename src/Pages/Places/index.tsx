import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePlaces } from '../../Hooks';
import Item from './Item';

const Loading = ({ hasMore }: { hasMore: boolean }) => (hasMore ? <h4>Loading...</h4> : null);

const Places = () => {
  const [places, hasMore, fetchNext] = usePlaces(true);

  return (
    <div id="places-page">
      <h1 className="label">List of registered places</h1>
      {places.length > 0 ? (
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={places.length}
          next={fetchNext}
          hasMore={hasMore}
          loader={<Loading hasMore={hasMore} />}
          className="listWrapper"
        >
          {places.map((place) => (
            <Item key={place.id.toString()} model={place} />
          ))}
        </InfiniteScroll>
      ) : (
        <Loading hasMore={hasMore} />
      )}
    </div>
  );
};

export default Places;
