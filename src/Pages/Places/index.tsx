import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePlaces } from '../../Hooks';
import Content from '../../Layout/Content';
import Item from './Item';

type LoadingProps = {
  hasMore: boolean;
};

const Loading: React.FC<LoadingProps> = ({ hasMore }: { hasMore: boolean }) => (hasMore ? <h4>Loading...</h4> : null);

const Places: React.FC = () => {
  const [places, hasMore, fetchNext] = usePlaces(true);

  return (
    <Content id="places-page">
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
    </Content>
  );
};

export default Places;
