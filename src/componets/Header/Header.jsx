import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

import cap from '../../assets/cap.png';
import Countdowns from '../Countdowns/Countdowns';
import { MenuItem, OutlinedInput, Select } from '@mui/material';
import routes from '../../routes/routes';

const Navbar = ({ userName, setUserName, onClickVisibleBurger }) => {
  const navigate = useNavigate();

  const logOut = () => {
    setUserName('');
    navigate('/', { replace: true });
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="sticky top-0 left-0 z-10 flex justify-between items-center w-full p-5 bg-light shadow-xl rounded-b-xl">
        <div onClick={() => onClickVisibleBurger(true)} className="mx-1 lg:hidden">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2">
          <img className="w-12 h-12" src={cap} alt="cap" />
          <h1 className="text-2xl text-red-600">MerryChristmas</h1>
        </div>

        <ul className="hidden lg:flex items-center gap-3">
          {routes.map((item) => (
            <li key={item.name}>
              <Link to={item.route}>
                <Button text>{item.name}</Button>
              </Link>
            </li>
          ))}
          {userName === 'admin' ? (
            <Link to="/admin">
              <Button text>Адмін</Button>
            </Link>
          ) : (
            ''
          )}
        </ul>

        <div className="hidden lg:block">
          {userName && userName.length !== 0 ? (
            <div className="flex items-center gap-2">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={20}
                label="username"
                input={<OutlinedInput label="Name" />}
                onChange={handleChange}>
                <MenuItem value={20} children={userName} />
                <MenuItem
                  value={10}
                  children={
                    <Button fullwidth text onClick={logOut}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#DC2626"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </Button>
                  }
                />
              </Select>
            </div>
          ) : (
            <Link to="/signin">
              <Button text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div>
        <Countdowns />
      </div>
    </>
  );
};

export default Navbar;
