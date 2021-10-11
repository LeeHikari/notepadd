import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import {Storage} from '../services';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


export function Header(){

    const history = useHistory();

    function ClearAll(){
        Storage.removeItem("notes");
        history.go(0)
    }

    return(
        <div className="header">
            <Link to="/">
                <h1>Notepadd</h1>
                <AwesomeButton type="primary" onPress={ClearAll}>Clear All</AwesomeButton>
            </Link>
        </div>
    );
}