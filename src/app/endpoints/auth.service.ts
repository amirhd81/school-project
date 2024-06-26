import BaseApi from "../baseApi";

class Auth extends BaseApi {
  constructor() {
    super({ suffix: "apiaccount/school-project" });
  }

  signup(data: {
    name: string;
    phone: string;
    password: string;
    email: string;
  }) {
    return this.httpService.post(`/auth/signup`, data);
  }

  login(data: { phone: string; password: string }) {
    return this.httpService.post(`/auth/login`, data);
  }
}

const authServices = new Auth();
export default authServices;
