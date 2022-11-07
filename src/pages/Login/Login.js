import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__top-section">
        <h1 className="h2-alt-font">Login</h1>
        <p className="body-font">Welcome back, please login.</p>
      </div>
      <form>
        <div className="login__input-holder">
          <div className="login__input-field-wrapper login__input-field-wrapper--span-2">
            <div className="input-field">
              <label className="input-field__label" htmlFor="email">
                email
              </label>
              <div className="input-field__input-wrapper">
                <input
                  className="input-field__input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  autoComplete="username"
                />
              </div>
            </div>
          </div>
          <div className="login__input-field-wrapper login__input-field-wrapper--span-2">
            <div className="input-field">
              <label className="input-field__label" htmlFor="password">
                password
              </label>
              <div className="input-field__input-wrapper">
                <input
                  className="input-field__input"
                  type="text"
                  id="password"
                  name="password"
                  placeholder="password"
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login__bottom-section">
          <button className="submit_button">Login</button>
          <p className="body-font">
            Don&apos;t have an account? <a href="/Registration">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
