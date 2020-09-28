import React from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import { PasswordStatus } from '../constants/main';
import { useDispatch } from 'react-redux';
import { setUserData } from '../actions/user';

const SignIn = () => {
  const [isEmailValid, setEmailValidity] = React.useState(true);
  const [passwordState, setPasswordState] = React.useState(PasswordStatus.OK);
  const dispatch = useDispatch();

  const isPasswordValid = passwordState === PasswordStatus.OK;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isCurrentPasswordValid = validatePassword(evt.target.user_password.value);
    const isCurrentEmailValid = validateEmail(evt.target.user_email.value);

    setEmailValidity(isCurrentEmailValid);
    setPasswordState(isCurrentPasswordValid);

    if (isCurrentPasswordValid && isCurrentEmailValid) {
      dispatch(
        setUserData({
          email: evt.target.user_email.value,
        }),
      );
    }
  };

  return (
    <div className="sign-in alt-font">
      <h1 className="sign-in__title">Simple Flight Check</h1>
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__field">
          <label
            htmlFor="user-email"
            className={`sign-in__label ${!isEmailValid && `sign-in__label--invalid`}`}>
            Логин:
          </label>
          <input
            id="user-email"
            name="user_email"
            type="email"
            autoComplete="email"
            className={`sign-in__input ${!isEmailValid && `sign-in__input--invalid`}`}
          />
          {!isEmailValid && (
            <p className="sign-in__error">Пожалуйста введите действительный email-адрес</p>
          )}
        </div>
        <div className="sign-in__field">
          <label
            htmlFor=""
            className={`sign-in__label ${!isPasswordValid && `sign-in__label--invalid`}`}>
            Пароль:
          </label>
          <input
            id="user-password"
            name="user_password"
            type="password"
            autoComplete="off"
            className={`sign-in__input ${!isPasswordValid && `sign-in__input--invalid`}`}
          />
          {!isPasswordValid && <p className="sign-in__error">{passwordState}</p>}
        </div>
        <button className="sign-in__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignIn;
