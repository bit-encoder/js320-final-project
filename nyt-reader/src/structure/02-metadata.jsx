import React from 'react';
import {useEffect, useState} from 'react'

export default function ListArticles({news_desk}) {
    const API_NYT_ARTICLE = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
    const NEWSDESK = `q=news_desk:(%22${news_desk}%22)&api-key=`
    const API_KEY = ''

    const [pokemon, setPokemon] = useState({});
    const [isLoading, setLoadStatus] = useState(true);

    useEffect(() => {
        fetch(`${API_NYT_ARTICLE}${NEWSDESK}${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                setLoadStatus(false);
            })
    });

    if (isLoading) { return <h1>Info Loading</h1> }

    return(
        <div className='pokemon-card'>
            <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
            <p><Link to={pokemon.name}>Details</Link></p>
            <div className='image-wrap'>
                <img alt={`${pokemon.name}`} src={pokemon.sprites.front_default} />
            </div>
        </div>
    );
}