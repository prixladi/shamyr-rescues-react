import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../../Layout/Content';
import { _Places } from '../../Navigation/Routes';

const Home = () => (
  <Content id="home-page">
    <h1 className="label">Shamyr Rescues</h1>
    <p>
      This website focuses on spreading awareness about animal rescues in your state. This place is for animal lovers around the world to
      look for places where they can help or donate. It's also for owners and staffers of animal rescues to add their establishments to the
      list so people can find them. You can check our <Link to={_Places}>List of places.</Link>
    </p>

    <p>
      <img src="https://hoghavenblog.org/wp-content/uploads/2019/04/Hooligan_Babies-1-1024x683.jpg" alt="homeImage" />
    </p>

    <p>
      As it is stated in <a href="https://en.wikipedia.org/wiki/Animal_rescue_group">Wikipedia</a>, animal rescue is:
    </p>

    <blockquote>
      An animal rescue group or animal rescue organization is dedicated to pet adoption. These groups take unwanted, abandoned, abused, or
      stray pets and attempt to find suitable homes for them. Many rescue groups are created by and run by volunteers, who take animals into
      their homes and care for them — including training, playing, handling medical issues, and solving behavior problems — until a suitable
      permanent home can be found.
    </blockquote>

    <p>But this list is not complete, many animal rescues also provide safe shelter for rescued farm animals.</p>
  </Content>
);

export default Home;
