import { User } from "../../entities";

export class SuccessUserSignInResponse {
  user;
  constructor(login) {
    const fakeResponse = { login: login, name: "Petr" };
    this.user = new User(fakeResponse);
  }
}

export class SuccessUserSignUpResponse {
  user;
  constructor(login, name) {
    const fakeResponse = { login: login, name: name };
    this.user = new User(fakeResponse);
  }
}
