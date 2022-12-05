import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Deck from "./Deck";
import Footer from "./Footer";

export default function Game() {
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];
    const cardsNum = cards.length;
    const [contFinished, setContFinished] = useState(0);

    return (
        <ScreenContainer>
            <Logo />
            <Deck cards={cards} contFinished={contFinished} setContFinished={setContFinished} />
            <Footer cardsNum={cardsNum} contFinished={contFinished} />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
    background-color: #FB6B6B;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`