import { SuccessUserSignInResponse, SuccessUserSignUpResponse } from "./models";

/**
 * Метод для регистрации
 * @param {string} login строка логиа
 * @param {string} password строка
 */
export function signIn(login, password) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new SuccessUserSignInResponse(login));
    }, 3000);
  });
}

/**
 * Метод для регистрации
 * @param {string} login строка логиа
 * @param {string} password строка
 */
export function signUp(login, name, password) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new SuccessUserSignUpResponse(login, name));
    }, 3000);
  });
}
