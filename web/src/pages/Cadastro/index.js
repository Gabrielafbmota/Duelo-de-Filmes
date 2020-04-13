import React, { useState, useEffect } from "react";
import api from '../../services/api'

import EpisodioForm from '../../components/EpisodioForm'
import Sidebar from '../../components/Header'

import "../../assets/css/global.css";
import "../../assets/css/app.css";
 

import './style.css'

function App() {

  const [episodios, setEpisodios] = useState([])
  useEffect(() => {
    async function loadEpisodios() {
      const response = await api.get('/episodios');
      setEpisodios(response.data)
    }
    loadEpisodios()
  }, [])

  async function handleAddEp(data) {

    const response = await api.post('/episodios', data)

    setEpisodios([...episodios, response.data])
  }

  return (
    <div id="App">
      <Sidebar />
      <div id="container">
        <header>
          <strong>
            Cadastrar Novo Episódio
          </strong>
        </header>
        <aside id="page-wrap">
          <EpisodioForm onSubmit={handleAddEp} />
        </aside>
      </div>
    </div>
  );
}
export default App;
