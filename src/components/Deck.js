import React from "react";
import styled from "styled-components"
import Flashcards from "./Flashcards"

export default function Deck(props) {

    const questions = props.cards.map((card, i) => (
            <Flashcards
                key={i}
                id={i}
                question={card.question}
                answer={card.answer}
                contFinished={props.contFinished}
                setContFinished={props.setContFinished}
            />
        ))

    return (
        <Container>
            {questions}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`