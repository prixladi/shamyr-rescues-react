import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { _Place, _PlaceExampleNew } from '../../Navigation/Routes';
import { placesService } from '../../Services';
import { PlaceForm } from '../../Components';
import Content from '../../Layout/Content';

const initialValues = {
  name: '',
  shortDescription: '',
  countryCode: '',
  address: '',
  description1: '',
  description2: '',
  description3: '',
  websiteUrl: '',
  imageUrl: '',
  quote: '',
};

const NewPlace: React.FC = () => {
  const history = useHistory();

  return (
    <Content id="new-place-page" hideFooter>
      <PlaceForm
        type="wide"
        title="Create Place"
        handleSubmit={async (values) => {
          const location = await placesService.create(values, history);
          if (!location) {
            return;
          }

          const match = location.match(/places\/([1-9]+[0-9]*)/);
          if (!match) {
            console.warn(`Invalid location header on POST /places - ${location}`);
            return;
          }

          history.push(_Place(Number(match[1])));
        }}
        submitText="Create"
        initialValues={initialValues}
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

export default NewPlace;
