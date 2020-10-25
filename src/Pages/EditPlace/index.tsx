import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { _Place, _PlaceExampleNew } from '../../Navigation/Routes';
import { placesService } from '../../Services';
import { PlaceForm } from '../../Components';
import { usePlace } from '../../Hooks';

type Match = {
  placeId: string;
};

const EditPlace = () => {
  const match = useRouteMatch<Match>();
  const place = usePlace(Number(match.params.placeId));
  const history = useHistory();

  if (place === null) return null;

  const { id, userId, removed, createdAt, updatedAt, ...rest } = place;

  return (
    <div id="new-place-page">
      <PlaceForm
        title="Edit Place"
        handleSubmit={async (values) => {
          if (await placesService.update(id, values, history)) {
            history.push(_Place(place.id));
          }
        }}
        submitText="Edit"
        initialValues={rest}
      >
        <p>
          Layout of textfields corresponds final layout of Place. You can try interactive example{' '}
          <Link target="_blank" to={_PlaceExampleNew}>
            Here.
          </Link>
        </p>
      </PlaceForm>
    </div>
  );
};

export default EditPlace;
