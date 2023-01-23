import React, { useEffect, useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableLogin, setEnableLogin] = useState(false);

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  useEffect(() => {
    const SIX = 6;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= SIX;

    setEnableLogin(isValidEmail && isValidPassword);
  }, [email, password]);
  return (
    <>
      <form>
        <label htmlFor="email">
          email:
          <input
            data-testid="common_login__input-email"
            type="email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            data-testid="common_login__input-password"
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ !enableLogin }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </form>
      <span
        data-testid="common_login__element-invalid-email"
      >
        s
      </span>
    </>
  );
}

export default LoginForm;
