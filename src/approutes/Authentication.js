const Auth = {
  authenticated: false,
  login() {
    Auth.authenticated = true;
  },
  logout() {
    Auth.authenticated = false;
  },
  isAuthenticated() {
    return Auth.authenticated;
  },
};
export default Auth;
