import './scss/styles.scss';

import React from 'react';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import { useSelector } from 'react-redux';
import LogoutBtn from './components/LogoutBtn';

const App = () => {
  const userData = useSelector(({ user }) => user.userData);

  return (
    <>
      {!userData ? (
        <>
          <LogoutBtn />
          <Main />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default App;
