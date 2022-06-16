import React from 'react';
import ListArticles from './02-listArticles';

export default function Home() {

    return(
        <div className = 'news-desk'>
            <ListArticles news_desk='business' page='0' />
            <ListArticles news_desk='culture' page='0' />
            <ListArticles news_desk='editorial' page='0' />
            <ListArticles news_desk='national' page='0' />
            <ListArticles news_desk='opinion' page='0' />
        </div>
    );
}