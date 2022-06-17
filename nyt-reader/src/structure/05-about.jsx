import React from 'react';

export default function About() {
    return (
        <div className='about-page'>
            <div className='extra-space'>
                <h1>About</h1>
                <p>New York times in not a fun API to work with. However it did allow for some issues to surface.</p>
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

                    <li>Grid dot effect - it takes a lot of time to come up with an optimal combination of styles
                    to make the grid dot effect, but essentially space out the cards from one another and make sure to
                    round out the corners of your card and this effect will be mitigated if not altogether eliminated.</li>

                    <li>Failed implementation: expanding card - the <code>&lt;Outlet&gt;</code> component doesn't
                    seem to have a way to "assign" components to it. If this was covered, it went over my head. Originally
                    I wanted to have a larger card to show between the nav bar and the section header. A lack of meaningful
                    content from the NYT API made it hard to justify a bigger card.</li>

                    <li>Failed implementation: metadata of NYT API - previously there was a way to call how many calls we had
                    left but I can't find anything like that anymore. I did find a <code>curl</code> of some sort, but could
                    not find it.
                    </li>
                </ol>
            </div>
        </div>
    );
}