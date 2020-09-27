import React from 'react';

const SignIn = () => {
  return (
    <div className="sign-in alt-font">
      <h1 className="sign-in__title">Simple Flight Check</h1>
      <form action="#" className="sign-in__form">
        <label htmlFor="user-email" className="sign-in__label">
          Логин:
        </label>
        <input
          id="user-email"
          name="user-email"
          type="email"
          autoComplete="email"
          className="sign-in__input"
        />
        <label htmlFor="" className="sign-in__label">
          Пароль:
        </label>
        <input
          id="user-password"
          name="user-password"
          type="password"
          autoComplete="off"
          className="sign-in__input"
        />
        <button className="sign-in__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
