import React, { useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePerson = () => {
  const [isNumber, setNumber] = useState();
  const [isSucces, setSucces] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`https://6477628e9233e82dd53b91f7.mockapi.io/persons/${isNumber}`)
      .then((response) => {
        // Обробка успішної відповіді
        console.log(response.data);
        setSucces(true);

        setTimeout(() => {
          setSucces(false);
          setNumber('');
        }, 2000);
      })
      .catch((error) => {
        // Обробка помилки
        window.alert('Персонажа з таким номером не знайдено!');
      });
  };

  return (
    <div className="p-5">
      <div className="mb-8">
        <Link to="/admin">
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

      <h2 className="text-app text-2xl text-center mb-5">Видалити персонажа</h2>

      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <Input
            id="id"
            type="text"
            placeholder="Номер персонажа..."
            value={isNumber}
            onChange={(e) => setNumber(e)}
          />
        </div>

        <div className="mt-6 text-center">
          {isSucces ? (
            <div className="p-2 text-white inline-block rounded-md bg-[#17c75c]">Успішно</div>
          ) : (
            <Button id="signin" type="submit">
              Видалити
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DeletePerson;
