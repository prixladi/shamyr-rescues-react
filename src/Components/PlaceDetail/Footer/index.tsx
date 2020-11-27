import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { PlaceDetailModel } from '../../../Api';
import useCountries from '../../../Hooks/useCountries';

type Props = {
  place: PlaceDetailModel;
  children: React.ReactNode;
};

const Footer: React.FC<Props> = ({ place, children }: Props) => {
  const { getName } = useCountries();
  const countryName = useMemo(() => getName(place.countryCode), [getName, place]);

  return (
    <div id="place-page">
      <p>
        {place.websiteUrl && (
          <>
            <a href={place.websiteUrl}>
              <FontAwesomeIcon icon={faPaperclip} /> Website
            </a>
            <br />
          </>
        )}

        {place.address && (
          <>
            <a href={`http://maps.google.com/?q=${place.address}+${countryName}`}>
              <FontAwesomeIcon icon={faAddressBook} /> {place.address}, {countryName}
            </a>
            <br />
          </>
        )}

        {children}
      </p>
    </div>
  );
};

export default Footer;
