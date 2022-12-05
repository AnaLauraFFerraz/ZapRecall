import { useState } from "react"
import styled from "styled-components"
import playIcon from "../assets/img/seta_play.png"
import turnIcon from "../assets/img/seta_virar.png"
import rightIcon from "../assets/img/icone_certo.png"
import parcialIcon from "../assets/img/icone_quase.png"
import wrongIcon from "../assets/img/icone_erro.png"

export default function Flashcards(props) {

    const [opened, setOpened] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [finished, setFinished] = useState(false);
    const [status, setStatus] = useState(""); // right, parcial, wrong

    function handleClicks() {
        let finishedIcon

        if (opened) {
            setOpened(true);
            return (
                <Question>
                    <p data-test="flashcard-text">{props.card.question}</p>
                    <img
                        src={turnIcon}
                        alt="Virar carta"
                        data-test="turn-btn"
                        onClick={() => setAnswered(true)}
                    />
                </Question>
            )
        }
        if (answered) {
            return (
                <Question>
                    <p data-test="flashcard-text">{props.card.answer}</p>
                    <ButtonsContainer>
                        <Button data-test="no-btn" color="#2FBE34" onClick={() => { handleFinished("right") }}>Não lembrei</Button>
                        <Button data-test="partial-btn" color="#FF922E" onClick={() => { handleFinished("parcial") }}>Quase não lembrei</Button>
                        <Button data-test="zap-btn" color="#2FBE34" onClick={() => { handleFinished("wrong") }}>Zap!</Button>
                    </ButtonsContainer>
                </Question>
            )
        }
        if (finished) {
            if (status === "right") {
                finishedIcon = <img data-test="zap-icon" src={rightIcon} alt="right icon" />;
            } else if (status === "parcial") {
                finishedIcon = <img data-test="parcial-icon" src={parcialIcon} alt="parcial icon" />;
            } else if (status === "wrong") {
                finishedIcon = <img data-test="no-icon" src={wrongIcon} alt="wrong icon" />;
            } else {
                finishedIcon = <img data-test="play-btn" src={playIcon} alt="play icon" />;
            }

            return (
                <Question>
                    <p data-test="flashcard-text">Pergunta {props.id + 1}</p>
                    {finishedIcon}
                </Question>
            )
        }
    }

    function handleFinished(status) {
        setFinished(true);
        setStatus(status)
        props.setContFinished(contFinished => contFinished + 1);
    }

    return (
        <div data-test="flashcard">{handleClicks()}</div>
    )
}

const Question = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.color};
        text-decoration: ${props => props.finished === true ? "line-through" : "none"};
    };
`
const SelectCard = styled.button`
    cursor: pointer;
    border:none;
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    cursor: pointer;
    width: 85.17px;
    height: 45px;
    border-radius: 5px;
    border:none;
    background-color:#FF922E;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
`
