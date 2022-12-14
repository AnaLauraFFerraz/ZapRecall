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
    const [status, setStatus] = useState("default"); // right, parcial, wrong

    function handleClicks() {
        let finishedIcon

        if (!opened && !answered && !finished) {
            return (
                <ClosedQuestion status={status}>
                    <p data-test="flashcard-text">Pergunta {props.id + 1}</p>
                    <img data-test="play-btn" src={playIcon} alt="play icon" onClick={() => setOpened(true)} />
                </ClosedQuestion>
            )
        }
        if (opened) {
            return (
                <OpenedQuestion>
                    <p data-test="flashcard-text">{props.question}</p>
                    <img
                        src={turnIcon}
                        alt="Virar carta"
                        data-test="turn-btn"
                        onClick={() => {
                            setAnswered(true);
                            setOpened(false)
                        }}
                    />
                </OpenedQuestion>
            )
        }
        if (answered) {
            return (
                <OpenedQuestion>
                    <p data-test="flashcard-text">{props.answer}</p>
                    <ButtonsContainer>
                        <Button data-test="no-btn" color="#FF3030" onClick={() => { handleFinished("wrong") }}>Não lembrei</Button>
                        <Button data-test="partial-btn" color="#FF922E" onClick={() => { handleFinished("parcial") }}>Quase não lembrei</Button>
                        <Button data-test="zap-btn" color="#2FBE34" onClick={() => { handleFinished("right") }}>Zap!</Button>
                    </ButtonsContainer>
                </OpenedQuestion>
            )
        }
        if (finished) {
            if (status === "right") {
                finishedIcon = <img data-test="zap-icon" src={rightIcon} alt="right icon" />;
            } else if (status === "parcial") {
                finishedIcon = <img data-test="parcial-icon" src={parcialIcon} alt="parcial icon" />;
            } else if (status === "wrong") {
                finishedIcon = <img data-test="no-icon" src={wrongIcon} alt="wrong icon" />;
            }

            return (
                <ClosedQuestion status={status}>
                    <p data-test="flashcard-text">Pergunta {props.id + 1}</p>
                    {finishedIcon}
                </ClosedQuestion>
            )
        }
    }

    function handleFinished(status) {
        setAnswered(false);
        setFinished(true);
        setStatus(status);
        props.setContFinished(contFinished => contFinished + 1);
    }

    return (
        <div data-test="flashcard">{handleClicks()}</div>
    )
}

const ClosedQuestion = styled.div`
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
        text-decoration: ${props => props.status === "default" ? "none" : "line-through"};
        color: ${props => {
        switch (props.status) {
            case "right":
                return "#2FBE34"
            case "parcial":
                return "#FF922E"
            case "wrong":
                return "#FF3030"
            default:
                return "#333333"
        }
    }}
    };
`
const OpenedQuestion = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85.17px;
    height: 45px;
    padding:5px;
    background: ${props => props.color};
    border: 1px solid ${props => props.color};
    border-radius: 5px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    cursor: pointer;        
`
