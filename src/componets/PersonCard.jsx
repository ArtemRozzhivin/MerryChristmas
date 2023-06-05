import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const PersonCard = () => {
  const { state } = useLocation();

  return (
    <div className="p-5 md:p-10 lg:p-20">
      <div className="mb-8">
        <Link to="/persons">
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
      <div className="flex items-center flex-col md:flex-row gap-5 lg:gap-20">
        <img
          className="w-[270px] h-[320px] object-top object-cover rounded-md bg-white"
          src={state.img}
          alt="img"
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">{state.name}</h2>
          <div>{state.description}</div>
          <div>{state.role}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
