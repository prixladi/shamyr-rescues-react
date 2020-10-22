export type PasswordLoginModel = {
  email: string;
  password: string;
};

export type NewUserModel = {
  username: string;
  email: string;
  password: string;
  givenName?: string;
  familyName?: string;
};
