import React, { useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddBock = () => {
  const [isName, setName] = useState();
  const [isDesc, setDesc] = useState();
  const [isImg, setImg] = useState();
  const [isSucces, setSucces] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: isName,
      description: isDesc,
      img: isImg,
    };

    axios
      .post('https://6477628e9233e82dd53b91f7.mockapi.io/persons', person, {
        'Content-Type': 'application/json',
      })
      .then((response) => {
        // Обробка успішної відповіді
        console.log(response.data);
        setSucces(true);

        setTimeout(() => {
          setSucces(false);
          setName('');
          setDesc('');
          setImg('');
        }, 2000);
      })
      .catch((error) => {
        // Обробка помилки
        console.error(error);
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
      <h2 className="text-app text-2xl text-center mb-5">Додати персонажа</h2>

      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <Input
            id="name"
            type="text"
            placeholder="Ім'я..."
            value={isName}
            onChange={(e) => setName(e)}
          />
        </div>
        <div className="mb-4">
          <Input
            id="desc"
            type="text"
            placeholder="Опис..."
            value={isDesc}
            onChange={(e) => setDesc(e)}
          />
        </div>
        <Input
          id="img"
          type="text"
          placeholder="Зображення..."
          value={isImg}
          onChange={(e) => setImg(e)}
        />

        <div className="mt-6 text-center">
          {isSucces ? (
            <div className="p-2 text-white inline-block rounded-md bg-[#17c75c]">Успішно</div>
          ) : (
            <Button id="signin" type="submit">
              Додати
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddBock;
