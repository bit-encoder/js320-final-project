import React from 'react';

export default function About() {
    return (
        <div className='about-page'>
            <h1>About</h1>
            <p>New York times in not a fun API to work with. However it did allow for some issues to surface.</p>
            <ul>
                <ol>
                    <li>Limited calls - for the <code>useEffect</code> function, a way to limit to calls
                    needed to be found. Had to go into the documentation again to see what to do. Turns out that as soon as
                    the call is completed, another call takes place. In order to avoid that, a second parameter, empty
                    brackets, needed to be added. This may be an afterthought during lecture, but there was much pain in
                    learning it, and the lesson has been thoroughly learned.</li>
                
                    <li>React Router - learning curve. It has been difficult for me to wrap around the whole concept.
                    Finally I understand that you need to create <code>&lt;Routers&gt;</code> and 
                    <code>&lt;Router&gt;</code> and only then can the <code>&lt;Link&gt;</code> be used. May be easy
                    for others, but I had to struggle to understand it.</li>
                </ol>
            </ul>
        </div>
    );
}