import { Box, Card, CardMedia, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import Input from '../ui/Input';
import { searchFromList } from '../utils/searchFromList';
import axios from 'axios';

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [likedPersons, setLikedPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [searchedPersons, setSearchedPersons] = useState(persons);
  const [searchedLikedPersons, setSearchedLikedPersons] = useState([]);

  useEffect(() => {
    setSearchedPersons(searchFromList(persons, search));
    setSearchedLikedPersons(searchFromList(likedPersons, search));
  }, [persons, search]);

  const onChangeValue = (value) => {
    setSearch(value);
  };

  const onClearValue = () => {
    setSearch('');
  };

  const fetchPersons = async () => {
    const { data } = await axios.get(`https://6477628e9233e82dd53b91f7.mockapi.io/persons`);
    setPersons(data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const onAddLiked = (value) => {
    const item = searchedLikedPersons.find((obj) => obj.id === value.id);
    if (item) {
      const newLiked = searchedLikedPersons.filter((obj) => obj.id !== item.id);
      setLikedPersons(newLiked);
      setSearchedLikedPersons(newLiked);
    } else {
      setSearchedLikedPersons((prevState) => [...prevState, value]);
      setLikedPersons((prevState) => [...prevState, value]);
    }
  };

  const TabPanel = ({ children, value, index, ...other }) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography children={children} />
          </Box>
        )}
      </div>
    );
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="px-0 p-5 flex flex-col gap-5">
      <div className="relative mx-2">
        <Input value={search} onChange={(e) => onChangeValue(e)} placeholder="Пошук персонажа..." />
        {search && (
          <div className="absolute top-[11px] right-4">
            <Button onClick={onClearValue}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        )}
      </div>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div className="flex justify-center">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Всі" {...a11yProps(0)} />
              <Tab label="Улюблені" {...a11yProps(1)} />
            </Tabs>
          </div>
        </Box>

        <TabPanel value={value} index={0}>
          <div>
            <ul className="grid xs:grid-cols-2  md:grid-cols-3 md:grid-rows-3 gap-2 lg:gap-10">
              {searchedPersons.map((person) => (
                <div className="flex flex-col items-center p-0 md:p-3 rounded-md" key={person.name}>
                  <Link
                    key={person.id}
                    className="group w-full"
                    to={`/personsDetails/${person.id}`}
                    state={person}>
                    <img
                      className="w-full h-[250px] object-center object-cover rounded-md bg-white border-4 group-hover:border-app border-white transition-all"
                      src={person.img}
                      alt="img"
                    />
                  </Link>
                  <div className="w-full mt-2 flex items-center justify-between">
                    <div className="text">{person.name}</div>
                    <Button onClick={() => onAddLiked(person)} text>
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div>
            {searchedLikedPersons.length !== 0 ? (
              <ul className="grid xs:grid-cols-2  md:grid-cols-3 md:grid-rows-3 gap-2 lg:gap-10">
                {searchedLikedPersons.map((person) => (
                  <div
                    className="flex flex-col items-center p-0 md:p-3 rounded-md"
                    key={person.name}>
                    <Link
                      key={person.id}
                      className="group w-full"
                      to={`/personsDetails/${person.id}`}
                      state={person}>
                      <img
                        className="w-full h-[250px] object-center object-cover rounded-md bg-white border-4 group-hover:border-app border-white transition-all"
                        src={person.img}
                        alt="img"
                      />
                    </Link>
                    <div className="w-full mt-2 flex items-center justify-between">
                      <div className="text">{person.name}</div>
                      <Button onClick={() => onAddLiked(person)} text>
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <div className="flex justify-center text-center items-center text-app my-20 text-2xl">
                Ви ще не додавали персонажів!
              </div>
            )}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default Persons;
