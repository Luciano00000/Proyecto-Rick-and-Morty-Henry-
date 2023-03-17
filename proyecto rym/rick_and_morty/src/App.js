import Cards from './components/Cards/Cards.jsx'
import styles from './App.module.css'
import Nav from './components/Nav/Nav'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
// import Favorites from "./components/Favorites/Favorites"


function App() {

  const [characters, setCharacters] = useState([])
  const { pathname } = useLocation()
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "lumbo@gmail.com"
  const password = "pass12345"

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "a812c5aed2ea.7536aa26fb0dbbdb900c"

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje Repetido!")
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChards) => [...oldChards, data])
        } else {
          alert("Algo salio mal")
        }
      })

  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));

  }

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Acceso Denegado")
    }
  }

  return (
    <div className={styles.divConte}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route 
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App;
