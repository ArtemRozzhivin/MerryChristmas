import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './layouts/Main';
import History from './pages/History';
import Persons from './pages/Persons';
import PersonCard from './componets/PersonCard';
import Signin from './pages/Signin';
import AdminPanel from './pages/AdminPanel';

import { useState } from 'react';
import Celebration from './pages/Celebration';
import InArt from './pages/InArt/InArt';
import AddPerson from './componets/Admin/AddPerson';
import DeletePerson from './componets/Admin/DeletePerson';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DC2626',
      error: '#17c75c',
    },
  },
});

function App() {
  const [userName, setUserName] = useState(''); //name of the authorized user

  //Routing on the site
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main userName={userName} setUserName={setUserName} />}>
            <Route path="/" element={<History />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/inArt" element={<InArt />} />
            <Route path="/celebration" element={<Celebration />} />
            <Route path="/personsDetails/:id" element={<PersonCard />} />
            <Route path="/signin" element={<Signin setUserName={setUserName} />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/addPerson" element={<AddPerson />} />
            <Route path="/admin/deletePerson" element={<DeletePerson />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
