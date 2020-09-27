import './scss/styles.scss';

import React from 'react';
import Main from './pages/Main';
import SignIn from './pages/SignIn';

const App = () => {
  const isAuthorized = true;

  return <>{isAuthorized ? <Main /> : <SignIn />}</>;
};

export default App;
