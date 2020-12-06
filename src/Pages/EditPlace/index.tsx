import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { _Place, _PlaceExampleNew } from '../../Navigation/Routes';
import { placesService } from '../../Services';
import { PlaceForm } from '../../Components';
import { usePlace } from '../../Hooks';
import Content from '../../Layout/Content';

type Match = {
  placeId: string;
};

const EditPlace: React.FC = () => {
  const match = useRouteMatch<Match>();
  const place = usePlace(Number(match.params.placeId));
  const history = useHistory();

  if (place === null) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, userId, removed, createdAt, updatedAt, ...rest } = place;

  return (
    <Content id="new-place-page" hideFooter>
      <PlaceForm
        type="wide"
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
    </Content>
  );
};

export default EditPlace;
