import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { NarrowContent } from '../../Components';
import Content from '../../Layout/Content';
import { _AccountVerify, _Home, _SignIn } from '../../Navigation/Routes';
import { authService } from '../../Services';
import queryString from 'query-string';

type State = boolean | 400 | 404 | 409;

type InfoProps = {
  children: React.ReactNode;
  title: string;
};

const Info: React.FC<InfoProps> = ({ children, title }: InfoProps) => (
  <Content id="account-verify-sent-page" hideFooter>
    <NarrowContent>
      <h1>{title}</h1>
      {children}
    </NarrowContent>
  </Content>
);

const AccountVerified: React.FC = () => {
  const { search } = useLocation();
  const [state, setState] = useState(false as State);
  const history = useHistory();
  const query = useMemo(() => queryString.parse(search), [search]);

  const tryVerify = useCallback(async () => {
    const result = await authService.verifyAccount(query.email as string, query.token as string, history);
    if (result) {
      setState(result as State);
    } else {
      setState(true);
    }
  }, [setState, history, query]);

  useEffect(() => {
    tryVerify();
  }, [tryVerify]);

  if (state === 400) {
    return (
      <Info title="Invalid request!">
        <p>
          Your verification request probably expired, you can request new link{' '}
          <Link<{ User: { Email: string } }> to={{ pathname: _AccountVerify, state: { User: { Email: query.email as string } } }}>
            Here
          </Link>
          .
        </p>
      </Info>
    );
  }

  if (state === 404) {
    return (
      <Info title="Account doesn't exist!">
        <p>
          Account with email attached to this request doesn{"'"}t exist you can try <Link to={_SignIn}> Sign-in </Link> again.
          <Link to={_Home}>Home</Link> page.
        </p>
      </Info>
    );
  }

  if (state === 409) {
    return (
      <Info title="Already verified!">
        <p>
          Your account has already been verified, you can <Link to={_SignIn}> Sign-in </Link> and start using aplication features.
        </p>
      </Info>
    );
  }

  if (state) {
    return (
      <Info title="Account Verified!">
        <p>
          Your account has been verified, now you can <Link to={_SignIn}> Sign-in </Link> and start using aplication features.
        </p>
      </Info>
    );
  }

  return null;
};

export default AccountVerified;
