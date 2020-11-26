import { useCallback } from 'react';
import countries from '../Data/countriesData.json';

type CountriesUtils = {
  getName: (code: string) => string;
  getCode: (name: string) => string;
  getAsOptions: () => {
    key: string;
    value: string;
  }[];
};

type Dictionary = { [id: string]: string };

const nameByCodes: Dictionary = {};
const codeByNames: Dictionary = {};
let asOptionSorted: { key: string; value: string }[];

const initCountries = () => {
  countries.forEach((entry) => {
    nameByCodes[entry.code] = entry.name;
    codeByNames[entry.name] = entry.code;
  });

  asOptionSorted = countries
    .map((country) => ({ key: country.code, value: country.name }))
    .sort((a, b) => ('' + a.value).localeCompare(b.value));
};

initCountries();

const useCountries = (): CountriesUtils => {
  const getName = useCallback((code: string) => {
    return nameByCodes[code];
  }, []);

  const getCode = useCallback((name: string) => {
    return codeByNames[name];
  }, []);

  const getAsOptions = useCallback(() => asOptionSorted, []);

  return { getName, getCode, getAsOptions };
};

export default useCountries;
