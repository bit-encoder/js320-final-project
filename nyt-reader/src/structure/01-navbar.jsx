import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const deskOptions = ['home', 'business', 'culture', 'editorial', 'national','opinion', 'about']

    return (
        <nav className='top-nav-bar'>
            <ul>
                {deskOptions.map( (option) => // Entries are capitalized by .css file
                    (<li className='desk-entry'><Link to={option}>{option}</Link></li>))
                }
            </ul>
        </nav>
    );
}