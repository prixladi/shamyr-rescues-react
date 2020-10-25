const _Home = '/home';
const _Places = '/places';
const _Place = (id: number | ':placeId') => `/places/${id}`;
const _PlaceNew = '/places/new';
const _PlaceEdit = (id: number | ':placeId') => `/places/${id}/edit`;
const _PlaceExample = '/places/example';
const _PlaceExampleNew = '/places/example/new';
const _SignIn = '/signIn';
const _Register = '/register';
const _ForgottenPassword = '/forgottenPassword';

const _Profile = '/profile';

export { _Home, _Places, _PlaceNew, _PlaceEdit, _Place, _PlaceExample, _PlaceExampleNew, _SignIn, _Register, _ForgottenPassword, _Profile };
