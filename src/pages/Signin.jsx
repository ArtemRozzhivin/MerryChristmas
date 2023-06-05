import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Input from '../ui/Input';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { validateName } from '../utils/validateInputs';

const Signin = ({ setUserName }) => {
  let navigate = useNavigate();
  const [isName, setName] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true); //якщо поля не пройшли валідацію, то кнопка заблокована

  const [isValid, setValid] = useState({
    name: false,
    password: false,
  });

  useEffect(() => {
    setButtonDisabled(!validateForm());
  }, [isValid]);

  const validateForm = () => {
    return Object.values(isValid).every((value) => value);
  };

  const handleNameChange = (value) => {
    const isNameValid = validateName(value);
    setValid((prevState) => ({ ...prevState, name: isNameValid }));
    setName(value);
  };

  const showError = (value, valid) => {
    if (isName === 'admin' && value !== 'admin') {
      //якщо ввести "admin" в поле логіну і паролю, то буде отримано доступ до адмін панелі
      return true;
    } else {
      return value !== '' && valid;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isName === 'admin' && isPassword === 'admin') {
      navigate('/admin', { replace: true });
    } else if (isName === 'admin' && isPassword !== 'admin') {
      setValid((prevState) => ({ ...prevState, password: false }));
    } else {
      navigate('/', { replace: true });
    }

    localStorage.setItem('userName', isName);
    localStorage.setItem('userPass', isPassword);
    setUserName(isName);
  };

  const handlePasswordChange = (value) => {
    const isPassValid = value.length < 5 ? false : true;
    setValid((prevState) => ({ ...prevState, password: isPassValid }));
    setPassword(value);
  };

  const checkAdminPass = () => {
    if (isName === 'admin' && isPassword !== 'admin') {
      return 'Неправильний пароль!';
    } else {
      return showError(isPassword, !isValid.password)
        ? 'Password should contain 5 characters at least'
        : '';
    }
  };

  return (
    <div className="p-5 rounded-sm">
      <div className="mb-8">
        <Link to="/">
          <Button text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-center text-2xl">Реєстрація</h2>
        <section>
          <div>
            <div>
              <form onSubmit={handleSubmit} className="">
                <div className="mb-4">
                  <Input
                    id="Username"
                    type="text"
                    placeholder="Логін..."
                    value={isName}
                    error={showError(isName, !isValid.name)}
                    helperText={
                      showError(isName, !isValid.name)
                        ? 'Username should contain 2-60 characters'
                        : ''
                    }
                    onChange={(e) => handleNameChange(e)}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    id="Password"
                    type="password"
                    placeholder="Пароль..."
                    value={isPassword}
                    onChange={(e) => handlePasswordChange(e)}
                    error={showError(isPassword, !isValid.password)}
                    helperText={checkAdminPass()}
                  />
                </div>

                <div className="mt-6 text-center">
                  <Button id="signin" type="submit" disabled={isButtonDisabled}>
                    Зайти
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Signin;
