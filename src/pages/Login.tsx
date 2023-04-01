import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorization, setAuthLogin, setAuthPassword } from '../redux/authorization/slice';
import { selectAuthorizationSlice } from '../redux/authorization/selectors';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authLogin, authPassword, authorized, errorDataSignIn, isUserFounded } =
    useSelector(selectAuthorizationSlice);
  const { t } = useTranslation();

  const onClickAuthorization = () => {
    dispatch(authorization());
  };

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthLogin(event.target.value));
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthPassword(event.target.value));
  };

  React.useEffect(() => {
    if (authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  return (
    <section className="login">
      <div className="login__title">{t('signIn')}</div>
      <form className="login__form">
        <div className="login__form-block">
          <input
            className="login__form-input login__form-log"
            onChange={onChangeLogin}
            value={authLogin}
            type="text"
            required
          />
          <span className="login__form-title">{t('login')}</span>
          <svg
            className="login__form-icon icon-log"
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
        <div className="login__form-block">
          <input
            className="login__form-input"
            onChange={onChangePassword}
            value={authPassword}
            type="password"
            required
          />
          <span className="login__form-title">{t('password')}</span>
          <svg
            className="login__form-icon icon-pass"
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
        <p className={errorDataSignIn ? 'login__form-error show' : 'login__form-error'}>
          {t('loginError')}
        </p>
        <p className={isUserFounded ? 'login__form-isfounded' : 'login__form-isfounded show'}>
          {t('loginIsFounded')}
        </p>
        <button className="login__form-btn" onClick={onClickAuthorization} type="button">
          {t('signIn')}
        </button>
        <p className="login__form-reg">
          {t('noacc')}
          <NavLink className="login__form-link" to="/register">
            {t('register')}
          </NavLink>
          !
        </p>
      </form>
    </section>
  );
};

export default Login;
