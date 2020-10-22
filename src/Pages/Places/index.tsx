import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePlaces } from '../../Hooks';
import Item from './Item';

const Places = () => {
  const [places, hasMore, fetchNext] = usePlaces(true);

  return (
    <>
      <h1 className="label">List of registered places</h1>
      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={places.length}
        next={fetchNext}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className="listWrapper"
      >
        {places.map((place) => (
          <Item model={place} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Places;
