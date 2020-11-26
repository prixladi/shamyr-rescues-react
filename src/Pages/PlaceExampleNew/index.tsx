import React from 'react';
import { useHistory } from 'react-router-dom';
import { _PlaceExample } from '../../Navigation/Routes';
import { PlaceForm } from '../../Components';
import data from './data.json';
import Content from '../../Layout/Content';

const PlaceExampleNew: React.FC = () => {
  const history = useHistory();

  return (
    <Content id="new-place-page" hideFooter>
      <PlaceForm
        type="wide"
        title="Create Place (Example)"
        handleSubmit={async (values) => {
          history.push(_PlaceExample, values);
        }}
        submitText="Preview example"
        initialValues={data}
      >
        <p>
          This is example of creating/editing place. Using button bellow you can check preview. You can edit individual attributes and it
          will be manifested in preview.
        </p>
      </PlaceForm>
    </Content>
  );
};

export default PlaceExampleNew;
