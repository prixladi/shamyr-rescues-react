import { useCallback } from 'react';
import countries from '../Data/countriesData.json';

type Dictionary = { [id: string]: string };

const nameByCodes: Dictionary = {};
const codeByNames: Dictionary = {};

const initCountries = () => {
  countries.forEach((entry) => {
    nameByCodes[entry.code] = entry.name;
    codeByNames[entry.name] = entry.code;
  });
};

initCountries();

const useCountries = () => {
  const getName = useCallback((code: string) => {
    return nameByCodes[code];
  }, []);

  const getCode = useCallback((name: string) => {
    return codeByNames[name];
  }, []);

  return { getName, getCode };
};

export default useCountries;
