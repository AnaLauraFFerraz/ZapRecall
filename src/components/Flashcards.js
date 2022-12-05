import { useState } from "react"
import styled from "styled-components"
import playIcon from "../assets/img/seta_play.png"
import turnIcon from "../assets/img/seta_virar.png"
import rightIcon from "../assets/img/icone_certo.png"
import halfIcon from "../assets/img/icone_quase.png"
import wrongIcon from "../assets/img/icone_erro.png"

export default function Flashcards(props) {
    //hidden, openedQuestion, openedAnswer, completed

    return (
        <>
            <HiddenQuestion>
                <p>Pergunta {props.id + 1}</p>
                <SelectCard><img src={playIcon} /></SelectCard>
            </HiddenQuestion>

            <OpenedQuestion>

                <ButtonsContainer>
                    <Button>Não lembrei</Button>
                    <Button>Quase não lembrei</Button>
                    <Button>Zap</Button>
                </ButtonsContainer>

            </OpenedQuestion>
        </>
    )
}

const HiddenQuestion = styled.div`
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
        /* color: ;
        text-decoration:  */
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
    /* display:  */
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
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
