import React, { useEffect, useState } from 'react';
import Header from '../componets/Header/Header';
import { Outlet } from 'react-router-dom';
import { Divider } from '@mui/material';
import Background from '../componets/Background/Backround';
import Burger from '../ui/Burger';

const Main = ({ userName, setUserName }) => {
  const body = document.querySelector('body');
  const [visibleBurger, setVisibleBurger] = useState(false);

  console.log(visibleBurger);

  // on/off body scroll when open burger or cart
  useEffect(() => {
    if (visibleBurger && body) {
      body.style.overflow = 'hidden';
    } else {
      if (body) body.style.overflow = 'auto';
    }
  }, [visibleBurger]);

  const onClickVisibleBurger = (visible) => {
    setVisibleBurger(visible);
  };

  //Головне вікно

  return (
    <>
      <div className="-z-10">
        <Background />
      </div>

      <div className="max-w-container m-auto flex flex-col gap-5 rounded-md justify-center">
        <Header
          onClickVisibleBurger={onClickVisibleBurger}
          userName={userName}
          setUserName={setUserName}
        />

        <div className="bg-light flex-auto h-full flex flex-col gap-5 rounded-md">
          <Outlet />
          <Burger
            userName={userName}
            setUserName={setUserName}
            isVisible={visibleBurger}
            onClickBurger={onClickVisibleBurger}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
