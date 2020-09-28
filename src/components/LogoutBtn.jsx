import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/user';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <button onClick={onLogoutClick} className="logout">
      Выйти
    </button>
  );
};

export default LogoutBtn;
