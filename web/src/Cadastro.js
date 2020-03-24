import React, { useState, useEffect } from "react";
import api from './services/api'
import EpisodioItem from './components/EpisodioItem'
import EpisodioForm from './components/EpisodioForm'

import "./assets/css/global.css";
import "./assets/css/app.css";
import "./assets/css/sidebar.css"
import "./assets/css/main.css"

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
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <EpisodioForm onSubmit={handleAddEp}/>
      </aside>
      <main>

        <ul>
          {episodios.map(ep => (
            <EpisodioItem key={ep.id} ep={ep} />
          ))}
        </ul>
      </main>
    </div>
  );
}
export default App;
