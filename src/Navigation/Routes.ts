const _Home = '/home';
const _Places = '/places';
const _Place = (id: number | ':placeId'): string => `/places/${id}`;
const _PlaceNew = '/places/new';
const _PlaceEdit = (id: number | ':placeId'): string => `/places/${id}/edit`;
const _PlaceExample = '/places/example';
const _PlaceExampleNew = '/places/example/new';
const _SignIn = '/signIn';
const _Register = '/register';
const _PasswordReset = '/passwordReset';
const _ForgottenPassword = '/forgottenPassword';
const _ForgottenPasswordSent = '/forgottenPassword/sent';
const _AccountVerified = '/accountVerified';
const _AccountVerify = '/accountVerify';
const _AccountVerifySent = '/accountVerify/sent';
const _Profile = '/profile';

export {
  _Home,
  _Places,
  _PlaceNew,
  _PlaceEdit,
  _Place,
  _PlaceExample,
  _PlaceExampleNew,
  _SignIn,
  _Register,
  _PasswordReset,
  _ForgottenPassword,
  _ForgottenPasswordSent,
  _AccountVerified,
  _AccountVerify,
  _AccountVerifySent,
  _Profile,
};
