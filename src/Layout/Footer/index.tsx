import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Footer: React.FC = () => (
  <footer>
    <p>
      This project is developed and maintained by{' '}
      <a href="http://ladislavprix.cz">
        <FontAwesomeIcon icon={faUser} /> Ladislav Prix
      </a>
      <br />
      You can contact author via email{' '}
      <a href="mailto://contact@ladislavprix.cz">
        <FontAwesomeIcon icon={faEnvelope} /> contact@ladislavprix.cz
      </a>
      <br />
      Source code for this can be found on{' '}
      <a href="https://github.com">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
    </p>
  </footer>
);

export default Footer;
