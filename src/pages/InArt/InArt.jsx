import React, { useEffect, useState } from 'react';

import './InArt.scss';
import axios from 'axios';

const InArt = () => {
  const [inArt, setInArt] = useState({ films: [], ballet: [], arts: [] });

  const fetchInArt = async () => {
    const { data } = await axios.get(`https://6477628e9233e82dd53b91f7.mockapi.io/inArt`);
    setInArt(data[0]);
  };

  useEffect(() => {
    fetchInArt();
  }, []);

  return (
    <div className="p-1 md:p-5 w-full">
      <div class="accordion">
        <li class="accordion-item" id="accordion-item-1">
          <a class="accordion-item-header" href="#accordion-item-1">
            Фільми
          </a>
          <div class="accordion-text">
            <p>
              <div className="mb-5">
                Різдво було популярною темою в мистецтві протягом всієї історії, а також широко
                зображувалося у фільмах. У фільмах це свято часто зображується як час радості,
                сімейних зустрічей, дарування подарунків і поширення доброзичливості. Пропонуємо вам
                ближче познайомитися з тим, як Різдво показують і висвітлюють у фільмах, а також
                ознайомитися зі списком фільмів про Різдво або пов'язаних з цією темою:
              </div>
              <ul className="flex flex-col gap-5">
                {inArt.films.map((film) => (
                  <li>
                    <div className="text-app">{film.name}:</div>
                    <div>{film.descrp}</div>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </li>
        <li class="accordion-item" id="accordion-item-2">
          <a class="accordion-item-header" href="#accordion-item-2">
            Картини
          </a>
          <div class="accordion-text">
            <p>
              <div className="mb-5">
                Різдво було популярною темою в мистецтві, особливо в живописі, протягом усієї
                історії. Художники зображували різні аспекти свята, включаючи вертепи, релігійну
                символіку, святкові урочистості та дух доброзичливості. Пропонуємо вам ближче
                познайомитися з тим, як Різдво зображається в мистецтві, а також ознайомитися з
                переліком визначних картин на цю тему:
              </div>
              <ul className="flex flex-col gap-16">
                {inArt.arts.map((art) => (
                  <li>
                    <div className="text-app">{art.name}:</div>
                    <div>{art.descrp}</div>
                    <ul className="flex flex-col text-center gap-10">
                      {art.artworks.map((item) => (
                        <li>
                          <div>
                            {item.name} - {item.author}
                          </div>
                          <img
                            className="w-auto h-[200px] mt-3 rounded-lg m-auto"
                            src={item.img}
                            alt="img"
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </li>
        <li class="accordion-item" id="accordion-item-3">
          <a class="accordion-item-header" href="#accordion-item-3">
            Балет
          </a>
          <div class="accordion-text">
            <p>
              <div className="mb-5">
                Різдво також святкували і представляли в балетному мистецтві. Багато балетних
                постановок було створено спеціально для того, щоб передати святковий дух і теми,
                пов'язані з Різдвом. Ось огляд того, як Різдво зображується в балеті, і список
                визначних балетних вистав на цю тему:
              </div>
              <ul className="flex flex-col gap-10">
                {inArt.ballet.map((item) => (
                  <li>
                    <div className="text-app">{item.name}:</div>
                    <div>{item.descrp}</div>
                    <img
                      className="w-auto h-[200px] mt-3 rounded-lg m-auto"
                      src={item.img}
                      alt="img"
                    />
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </li>
      </div>
    </div>
  );
};

export default InArt;
