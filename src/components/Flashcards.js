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
                    <p>Pergunta {props.id + 1}</p>
                    <img
                        src={playIcon}
                        alt="Play"
                        onClick={() =>
                            setOpened(true)}
                    />
                </ClosedQuestion>
            )
        }
        if (opened) {
            return (
                <OpenedQuestion>
                    <p>{props.question}</p>
                    <img
                        src={turnIcon}
                        alt="Ver resposta"
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
                    <p>{props.answer}</p>
                    <div className="buttonsContainer">
                        <Button color="#FF3030" onClick={() => { handleFinished("wrong") }} alt="Não lembrei">Não lembrei</Button>
                        <Button color="#FF922E" onClick={() => { handleFinished("parcial") }} alt="Quase não lembrei">Quase não lembrei</Button>
                        <Button color="#2FBE34" onClick={() => { handleFinished("right") }} alt="Zap!">Zap!</Button>
                    </div>
                </OpenedQuestion>
            )
        }
        if (finished) {
            if (status === "right") {
                finishedIcon = <img src={rightIcon} alt="Zap!" />;
            } else if (status === "parcial") {
                finishedIcon = <img src={parcialIcon} alt="Quase não lembrei" />;
            } else if (status === "wrong") {
                finishedIcon = <img src={wrongIcon} alt="Não lembrei" />;
            }

            return (
                <ClosedQuestion status={status}>
                    <p>Pergunta {props.id + 1}</p>
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
        <div>{handleClicks()}</div>
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
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    };
    .buttonsContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
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
