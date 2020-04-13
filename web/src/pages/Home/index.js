import React, { useState, useEffect } from "react";
import api from '../../services/api'
import EpisodioItem from '../../components/EpisodioItem'
import Sidebar from '../../components/Header'

import "../../assets/css/global.css";
import "../../assets/css/main.css";
import './style.css'

function Home() {
  const [episodios, setEpisodios] = useState([])
  useEffect(() => {
    async function loadEpisodios() {
      const response = await api.get('/episodios');
      setEpisodios(response.data)
    }
    loadEpisodios()
  }, [])

  return (

    <div id="App">
      <Sidebar />
      <div id="app">
        <aside>
          <strong>Login</strong>
        </aside>
        <main id="page-wrap">

          <ul>
            {episodios.map(ep => (
              <EpisodioItem key={ep.id} ep={ep} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}


export default Home