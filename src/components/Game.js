import React from "react";
import Questions from "./Questions";
import Bottom from "./Bottom";
import logo from '../assets/img/logo.png';

export default function Game() {

    return (
        <div>
            <div>
                <img className="logo" src={logo}></img>
                <h1>Zap Recall</h1>
            </div>
            <Questions />
            <Bottom />
        </div>
    )
}
