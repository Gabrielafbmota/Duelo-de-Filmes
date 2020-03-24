import React, { useState } from 'react'
import './style.css'

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
                <label htmlFor="episodio">Episódio</label>
                <input
                    name="episodio"
                    id="episodio"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="tema">Tema</label>
                <input
                    name="tema"
                    id="tema"
                    required
                    value={tema}
                    onChange={e => setTema(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="URL do Episódio">URL do Episódio</label>
                <input
                    type="url"
                    name="urlepisodio"
                    id="urlepisodio"
                    required
                    value={episodio_url}
                    onChange={e => setUrlEpisodio(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="imgepisodio">Imagem do Episódio</label>
                <input
                    type="url"
                    name="imgepisodio"
                    id="imgepisodio"
                    required
                    value={episodio_image}
                    onChange={e => setImagemEpisodio(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="descricaoepisodio">Descrição do Episódio</label>
                <textarea
                    rows="8"
                    name="descricaoepisodio"
                    id="descricaoepisodio"
                    required
                    value={episodio_description}
                    onChange={e => setDescricaoEpisodio(e.target.value)}
                ></textarea>

            </div>
            <button type="submit"> Cadastrar</button>
        </form>
    )
}
export default EpisidioForm