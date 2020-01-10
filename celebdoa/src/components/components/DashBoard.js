import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';




export default function DashBoard(){

    return(
        <section className="home-page">
            <header>
                <h1>Celebrity! dead or alive quiz</h1>
                <h2>do you know if these celebrities are still among us?</h2>
            </header>
            <Button >Take the Quiz!</Button>
            <div>
                <h2>already taken the quiz and want to view your score?</h2>
                <Button>Log in!</Button>
                    <Link to='https://celebridead.netlify.com/'></Link>
            </div>
        </section>

        
        


    );
}