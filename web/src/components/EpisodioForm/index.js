import React, { useState } from 'react'

import './style.css'
import "../../assets/css/global.css";


function EpisidioForm({ onSubmit }) {

    const [nome, setNome] = useState('')
    const [tema, setTema] = useState('')
    const [episodio_url, setUrlEpisodio] = useState('')
    const [episodio_image, setImagemEpisodio] = useState('')
    const [episodio_description, setDescricaoEpisodio] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
            nome,
            episodio_url,
            episodio_image,
            episodio_description,
            tema,
        })
        setDescricaoEpisodio('')
        setNome('')
        setTema('')
        setUrlEpisodio('')
        setImagemEpisodio('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <input
                    name="episodio"
                    id="episodio"
                    required
                    placeholder="Episódio"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
            </div>
            <div className="input-block">
                <input
                    name="tema"
                    id="tema"
                    required
                    placeholder="Tema"
                    value={tema}
                    onChange={e => setTema(e.target.value)}
                />
            </div>
            <div className="input-block">
                <input
                    type="url"
                    name="urlepisodio"
                    id="urlepisodio"
                    required
                    placeholder="URL do Episódio"
                    value={episodio_url}
                    onChange={e => setUrlEpisodio(e.target.value)}
                />
            </div>
            <div className="input-block">
                <input
                    type="url"
                    name="imgepisodio"
                    id="imgepisodio"
                    required
                    placeholder="Imagem do Episódio"
                    value={episodio_image}
                    onChange={e => setImagemEpisodio(e.target.value)}
                />
            </div><br/>
            <div className="input-block">
                <textarea
                    rows="8"
                    name="descricaoepisodio"
                    id="descricaoepisodio"
                    required
                    placeholder="Descrição do Episódio"
                    value={episodio_description}
                    onChange={e => setDescricaoEpisodio(e.target.value)}
                />
            </div>

            <button className="button" type="submit"> Cadastrar</button>
        </form>
    )
}
export default EpisidioForm