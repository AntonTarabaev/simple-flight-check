export const LoadedStatus = {
  LOADED: 'LOADED',
  LOADING: 'LOADING',
  NEVER: 'NEVER',
  ERROR: 'ERROR',
};

export const PasswordStatus = {
  OK: 'OK',
  INIT: 'INIT',
  LENGTH_ERROR: 'Пароль должен состоять минимум из 8 символов',
  CYRILLIC_ERROR: 'Пароль не должен содержать кириллицу',
  TYPE_ERROR: 'Пароль должен быть строкой',
};

export const EmailStatus = {
  OK: 'OK',
  INIT: 'INIT',
  EMAIL_ERROR: 'Пожалуйста введите действительный email-адрес',
};
