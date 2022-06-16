import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './03-home.jsx';
import SpecificNewsDesk from './04-news-desk-articles.jsx';
import About from './05-about.jsx';

export default function CreateLinks() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/business' element={<SpecificNewsDesk newsDesk='business' />} />
            <Route path='/culture' element={<SpecificNewsDesk newsDesk='culture' />} />
            <Route path='/editorial' element={<SpecificNewsDesk newsDesk='editorial' />} />
            <Route path='/national' element={<SpecificNewsDesk newsDesk='national' />} />
            <Route path='/opinion' element={<SpecificNewsDesk newsDesk='opinion' />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
    
}