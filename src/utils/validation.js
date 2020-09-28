import { PasswordStatus } from '../constants/main';

export const validateEmail = (email) => {
  // eslint-disable-next-line
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
};

export const validatePassword = (password) => {
  if (typeof password !== `string`) {
    return PasswordStatus.TYPE_ERROR;
  }

  if (password.length < 8) {
    return PasswordStatus.LENGTH_ERROR;
  }

  if (/[а-яА-ЯЁё]/.test(password)) {
    return PasswordStatus.CYRILLIC_ERROR;
  }

  return PasswordStatus.OK;
};
