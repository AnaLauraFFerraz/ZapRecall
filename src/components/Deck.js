import React from "react";
import styled from "styled-components"
import Flashcards from "./Flashcards"

export default function Deck(props) {

    const questions = props.cards
        .map((card, i) => (
            <Flashcards key={i} id={i} question={card.question} answer={card.answer} contFinished={props.contFinished} setContFinished={props.setContFinished} />
        ))

    return (
        <>
            {questions}
        </>
    );
}

Flashcards = styled.div`
    width: 300px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family:'Recursive', sans-serif;
    font-weight: 700;
    font-size:16px;
    color: #333333;
    margin-bottom: 25px;
    padding: 23px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
