import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import cap from '../assets/cap.png';
import routes from '../routes/routes';
import { MenuItem, OutlinedInput, Select } from '@mui/material';

const Burger = ({ isVisible, onClickBurger, userName, setUserName }) => {
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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: '0' }}
            exit={{ x: '-100vw' }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 bg-white w-full h-full z-30">
            <div className="flex items-center justify-between p-2 w-full">
              <div className="flex items-center gap-2">
                <img className="w-12 h-12" src={cap} alt="cap" />
                <h1 className="text-2xl text-red-600">MerryChristmas</h1>
              </div>
              <Button text onClick={() => onClickBurger(false)} small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>

            <div className="flex mt-20 justify-center items-center">
              <ul className="flex flex-col h-full text-center items-center justify-center">
                {routes.map((item) => (
                  <li key={item.name}>
                    <Link onClick={() => onClickBurger(false)} to={item.route}>
                      <Button text>{item.name}</Button>
                    </Link>
                  </li>
                ))}
                {userName === 'admin' ? (
                  <Link onClick={() => onClickBurger(false)} to="/admin">
                    <Button text>Адмін</Button>
                  </Link>
                ) : (
                  ''
                )}
                <div className="mt-7">
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
                    <Link onClick={() => onClickBurger(false)} to="/signin">
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
              </ul>
            </div>

            {/* <div className="flex items-center justify-between p-2 bg-lightGreen">
              <div className="flex items-center gap-2">
                <img className="w-12 h-12" src={cap} alt="cap" />
                <h1 className="text-2xl text-red-600">MerryChristmas</h1>
              </div>
              <Button text onClick={() => onClickBurger(false)} small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
            <div className=" flex justify-center items-center">
              <ul className="flex flex-col justify-center items-center gap-3">
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
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;
