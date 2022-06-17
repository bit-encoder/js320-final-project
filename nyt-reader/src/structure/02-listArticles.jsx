import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { writeFriendlyDate, spitOutDates } from './zz-supportFunctions';

export default function ListArticles({news_desk, page}) {

    const dates = spitOutDates()
    const stringOneYearAgo = dates[0];
    const stringTodayDate = dates[1];

    const API_NYT_ARTICLE = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
    const NEWSDESK = `begin_date=${stringOneYearAgo}&end_date=${stringTodayDate}&fq=news_desk:(%22${news_desk}%22)&page=${page}&sort=newest&api-key=`
    const API_KEY = '5K7S1Io86tSdhZgxgg514mGvp7Km3sUX';

    const [articles, setArticles] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_NYT_ARTICLE}${NEWSDESK}${API_KEY}`)
            .then(response => response.json())
            .then(data => { 
                setArticles(data.response.docs);
                isLoading(false); }) 
        // eslint-disable-next-line
    }, [news_desk]);
        
    // This is necessary because there is a delay between the call and the response.
    if (loading) { return <p className='loading-warning'>IS LOADING</p>}    

    // I would like to thank code source and the person who wrote this:
    // https://codesource.io/how-to-use-foreach-loop-in-react/
    let articleList = []

    articles.forEach(entry => {
        articleList.push(
            <div className='summary-card'>
                <div key={entry._id} className='summary-info'>
                    <h3>{entry.headline['main']}</h3>
                    <h5>{writeFriendlyDate(entry.pub_date)}</h5>
                    <p>{entry.snippet}</p>

                    <p><a href={entry.web_url}>Read more</a></p>
                </div>
            </div>
        );
    })

    return(
        <div className='article-column'>
            <h1 className='desk-name'>{news_desk}</h1>
            {articleList}
        </div>
    );
}

ListArticles.propTypes = {
    news_desk: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
}