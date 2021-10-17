import React from 'react';
import { Link } from 'react-router-dom';

export function Header(){

    return(
        <div class="text-center pt-5 bg-red-300">
            <Link to="/">
                <h1 class="text-6xl font-black font-serif text-black">Notepadd</h1>
            </Link>
            <br/>
        </div>
    );
}