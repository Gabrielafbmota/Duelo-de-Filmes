import React from "react";
//import dos componentes
import Episodios from './Episodios'
// import do css
import "./assets/css/global.css";
import "./assets/css/app.css";
import "./assets/css/sidebar.css"
import "./assets/css/main.css"
//import da imagem
import imagem from './assets/images/imagem.jpg'
function App() {
  return (
    <div id="app">
      {/* lateral da página, onde serão cadastrados os eps */}
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="episodio">Episódio</label>
            <input name="episodio" id="episodio" required />
          </div>
          <div className="input-block">
            <label htmlFor="URL do Episódio">URL do Episódio</label>
            <input name="urlepisodio" id="urlepisodio" required />
          </div>
          <div className="input-block">
            <label htmlFor="imgepisodio">Imagem do Episódio</label>
            <input name="imgepisodio" id="imgepisodio" required />
          </div>
          <div className="input-block">
            <label htmlFor="descricaoepisodio">Descrição do Episódio</label>
            <textarea rows="8" name="descricaoepisodio" id="descricaoepisodio" required></textarea>

          </div>
          <button type="submit"> Cadastrar</button>
        </form>
      </aside>
      {/* fim da lateral da página */}
      {/* começo do "corpo" da página, onde ficarão os eps cadastrados; */}
      <main>
        <Episodios />        
      </main>
    </div>
  );
}
export default App;
