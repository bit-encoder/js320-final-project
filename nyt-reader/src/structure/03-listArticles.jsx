import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ListArticles({news_desk}) {
    const API_NYT_ARTICLE = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
    const NEWSDESK = `begin_date=20210611&end_date=20220611&fq=news_desk:(%22${news_desk}%22)&sort=newest&api-key=`
    const API_KEY = '5K7S1Io86tSdhZgxgg514mGvp7Km3sUX'

    const [articles, setArticles] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_NYT_ARTICLE}${NEWSDESK}${API_KEY}`)
            .then(response => response.json())
            .then(data => { 
                setArticles(data.response.docs);
                isLoading(false); }) 
        // eslint-disable-next-line
    }, []);
        
    if (loading) { return <p>IS LOADING</p>}    // This is necessary because there is a delay between the call and the response.

    // I would like to thank code source and the person who wrote this:
    // https://codesource.io/how-to-use-foreach-loop-in-react/
    let articleList = []

    articles.forEach(entry => {
        articleList.push(
            <div className='summary-card'>
                <div className='summary-image'>
                    {/* <img alt="to be determined" src={"https://www.nytimes.com/" + entry.multimedia[17].url}/> */}
                </div>

                <div>
                    <h3>{entry.headline['main']}</h3>
                    <p>{entry.snippet}</p>
                </div>
                {/* <p key={idNumber}>{entry.abstract}</p> */}
            </div>
        );
    })

    return(
        <div className={'article-row summary-cards-' + news_desk}>
            <h1>{news_desk}</h1>
            {articleList}
        </div>
    );
}