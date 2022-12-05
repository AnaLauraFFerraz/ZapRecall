import React from "react";
import Flashcards from "./Flashcards"

export default function Deck(props) {

    const questions = props.cards
        .map((card, i) => (
            <Flashcards key={i} id={i} question={card.question} answer={card.answer} />
        ))

    return (
        <>
            {questions}
        </>
    );
}
