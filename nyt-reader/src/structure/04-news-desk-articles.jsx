// import React from 'react';
import ListArticles from './02-listArticles';

export default function SpecificNewsDesk({newsDesk}) {
    return (
            <div className='news-desk'>
                <ListArticles news_desk={newsDesk} page='0' />
                <ListArticles news_desk={newsDesk} page='1' />
                <ListArticles news_desk={newsDesk} page='2' />
                <ListArticles news_desk={newsDesk} page='3' />
                <ListArticles news_desk={newsDesk} page='4' />
            </div>
    )
}