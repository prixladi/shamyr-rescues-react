import countries from '../Data/countriesData.json';

type Disctionary = { [id: string]: string };

const nameByCodes: Disctionary = {};
const codeByNames: Disctionary = {};

const initCountries = () => {
  countries.forEach((entry) => {
    nameByCodes[entry.code] = entry.name;
    codeByNames[entry.name] = entry.code;
  });
};

initCountries();

const useCountries = () => {
  const getName = (code: string) => {
    return nameByCodes[code];
  };

  const getCode = (name: string) => {
    return codeByNames[name];
  };

  return { getName, getCode };
};

export default useCountries;
