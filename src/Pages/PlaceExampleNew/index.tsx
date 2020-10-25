import React from 'react';
import { useHistory } from 'react-router-dom';
import { _PlaceExample } from '../../Navigation/Routes';
import { PlaceForm } from '../../Components';

import data from './data.json';

const PlaceExampleNew = () => {
  const history = useHistory();

  return (
    <div id="new-place-page">
      <PlaceForm
        title="Create Place (Example)"
        handleSubmit={async (values) => {
          history.push(_PlaceExample, values);
        }}
        submitText="Preview example"
        initialValues={data}
      >
        <p>
          This is example of creating/editing place. Using button bellow you can check preview. You can edit individual attributes and it will be manifested in preview.
        </p>
      </PlaceForm>
    </div>
  );
};

export default PlaceExampleNew;
