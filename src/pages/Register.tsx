import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  registration,
  setRegistrLogin,
  setRegistrEmail,
  setRegistrPassword,
} from '../redux/authorization/slice';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { usersBase, registrLogin, registrPassword, registrEmail } = useSelector(
    (state: RootState) => state.authorizationSlice,
  );

  console.log('Login ' + registrLogin);
  console.dir('Users Base  ' + usersBase);

  const onClickRegistration = () => {
    dispatch(registration());
  };

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrLogin(event.target.value));
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrPassword(event.target.value));
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrEmail(event.target.value));
  };

  return (
    <section className="register">
      <div className="register__title">{t('titleReg')}</div>
      <form className="register__form">
        <div className="register__form-block">
          <input
            className="register__form-input register__form-log"
            onChange={onChangeLogin}
            value={registrLogin}
            type="text"
            required
          />
          <span className="register__form-title">{t('createLogin')}</span>
          <svg
            className="register__form-icon icon-log"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <title />
            <g data-name="Layer 19" id="Layer_19">
              <path
                className="cls-1"
                d="M16 17a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm0-14a6 6 0 1 0 6 6 6 6 0 0 0-6-6ZM23 31H9a5 5 0 0 1-5-5v-4a1 1 0 0 1 .49-.86l5-3a1 1 0 0 1 1 1.72L6 22.57V26a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3.43l-4.51-2.71a1 1 0 1 1 1-1.72l5 3A1 1 0 0 1 28 22v4a5 5 0 0 1-5 5Z"
              />
            </g>
          </svg>
        </div>
        <div className="register__form-block">
          <input
            className="register__form-input"
            onChange={onChangePassword}
            value={registrPassword}
            type="password"
            required
          />
          <span className="register__form-title">{t('createPassword')}</span>
          <svg
            className="register__form-icon icon-pass"
            height={32}
            width={32}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="#333">
              <path d="M25 13V9a9 9 0 0 0-9-9 9 9 0 0 0-9 9v4a3 3 0 0 0-3 3v7a9 9 0 0 0 9 9h6a9 9 0 0 0 9-9v-7a3 3 0 0 0-3-3zM9 9a7 7 0 1 1 14 0v4h-2V9.002a5 5 0 0 0-5-5 5 5 0 0 0-5 5V13H9V9zm11 0v4h-8V9a4 4 0 0 1 8 0zm6 10v4c0 3.859-3.141 7-7 7h-6c-3.859 0-7-3.141-7-7v-7a1 1 0 0 1 1-1h18c.551 0 1 .448 1 1v3z" />
              <path d="M16 19a2 2 0 0 0-2 2c0 .607.333 1.76.667 2.672.272.742.614 1.326 1.333 1.326.782 0 1.061-.578 1.334-1.316.338-.914.666-2.073.666-2.682a2 2 0 0 0-2-2z" />
            </g>
          </svg>
        </div>
        <div className="register__form-block">
          <input
            className="register__form-input"
            onChange={onChangeEmail}
            value={registrEmail}
            type="text"
            required
          />
          <span className="register__form-title">{t('yourEmail')}</span>
          <svg
            className="register__form-icon icon-email"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                {'.cls-1{fill:none;stroke:#000;stroke-linejoin:round;stroke-width:2px}'}
              </style>
            </defs>
            <title />
            <g data-name="309-Email Check" id="_309-Email_Check">
              <path className="cls-1" d="M15 27H1V5h30v10" />
              <path className="cls-1" d="m1 5 15 11L31 5M20 22l3 3 7-7" />
            </g>
          </svg>
        </div>
        <button className="register__form-btn" type="button" onClick={onClickRegistration}>
          {t('register')}
        </button>
        <p className="register__form-reg">
          {t('haveacc')}
          <NavLink className="register__form-link" to="/login">
            {t('regSignIn')}
          </NavLink>
          !
        </p>
      </form>
    </section>
  );
};

export default Register;
