import React from "react";
import styled from 'styled-components'

const Pagina = styled.className`
bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}`

function InforPessoais(props) {
    return (
    <div>
        <div className="CardPequeno">
        
        <h1>Email</h1>
        <p>{props.email}</p>
        </div>
        
        <div>
        <h1> Endereço</h1>
        <h3>{props.endereço}</h3>
        </div>
    </div>
    )
}
export default CardPequeno;