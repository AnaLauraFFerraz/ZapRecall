import React from "react";
import styled from "styled-components";

export default function Footer(props) {
    return (
        <FooterContainer>
            <div className="concluded">
                {props.contFinished}/{props.cardsNum} Concluídos
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Recursive;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  .concluded {
    display: flex;
    width: 80%;
    justify-content: center;
    margin: 20px;
  }
`