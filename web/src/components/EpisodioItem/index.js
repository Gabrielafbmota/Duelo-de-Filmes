import React from "react";
import './styles.css'

function EpisodioItem({ ep }) {
    return (
        <li className="ep-item">
            <header>
                <img src={ep.episodio_image} alt={ep.nome} srcset="" className="imagem" />
                <div className="episodioinfo">
                    <strong>{ep.nome}</strong>
                    <label>{ep.tema}</label>
                </div>

            </header>
            <p>{ep.episodio_description}</p>
            <a href={ep.episodio_url}>Ouça o Episódio</a>
        </li>
    )
}

export default EpisodioItem