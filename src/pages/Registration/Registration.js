import React from 'react';
import './registration.scss';

const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__top-section">
        <h1 className="h2-alt-font">Register</h1>
        <p className="body-font">Let&apos;s get you on board.</p>
      </div>
      <form>
        <div className="registration__input-holder">
          <div className="registration__input-field-wrapper">
            <div className="input-field">
              <label className="input-field__label" htmlFor="firstName">
                first name
              </label>
              <div className="input-field__input-wrapper">
                <input
                  className="input-field__input"
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="first name"
                />
              </div>
            </div>
          </div>
          <div className="registration__input-field-wrapper">
            <div className="input-field">
              <label className="input-field__label" htmlFor="lastName">
                last name
              </label>
              <div className="input-field__input-wrapper">
                <input
                  className="input-field__input"
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          <div className="registration__input-field-wrapper registration__input-field-wrapper--span-2">
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
          <div className="registration__input-field-wrapper">
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
          <div className="registration__input-field-wrapper">
            <div className="input-field">
              <label className="input-field__label" htmlFor="repeatPassword">
                repeat password
              </label>
              <div className="input-field__input-wrapper">
                <input
                  className="input-field__input"
                  type="text"
                  id="repeat-password"
                  name="repeatPassword"
                  placeholder="repeat password"
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="registration__bottom-section">
          <button className="submit_button">Register</button>
          <p className="body-font">
            Already have an account? <a href="/Login">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
