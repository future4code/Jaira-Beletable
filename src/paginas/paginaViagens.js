import React from 'react';
import {useHistory} from 'react-router-dom';

const paginaViagens = () => {
    const history = useHistory()
const irPaginaIncial = () => {
history.push("./paginaInicial")
const paginaParaInscricao = () => {
    history= useHistory()
    history.push("./paginainscricao")
}
return (
<div>
    <button onClick=("./paginaInicial")>voltar</button>
    <button onClick=("./paginainscricao")>Inscreve-se</button>
    <h1>Lista de Viagens</h1>
    <p>
        Nome: MilkWay Tour

        Descrição:Tour pela Milk Way toda, da Terra até Netuno 
        (Não passaremos em Plutão que não é mais um planeta)

        Planeta: Netuno

        Duração: 365

        Data: 2022-02-20 
    </p>

    <p>
        Nome:  Viagem da minha vida

        Descrição: A mais aguardada do ano, 
        a mais esperado da aminha vida inteira!!!!!!!!!!!!!!!!!!!

        Planeta: Saturno

        Duração: 60

        Data: 2021-12-09

    </p>

    <p>
        Nome: Labenu

        Descrição: Labenu é um ambiente de aprendizado de programação

        Planeta: Vênus

        Duração: 180

        Data: 2021-12-23
    </p>
    <p>
        Nome: Viagem da labenu

        Descrição: Viagem sem volta para o paraíso das estrelas

        Planeta: Vênus

        Duração: 180

        Data: 2021-12-31
    </p>

    <p>
        Nome: Ao infitino e além

        Descrição:  Viagem pra plutão, o melhor planeta do sistema solar

        Planeta: Plutão

        Duração: 100

        Data: 2022-01-21


    </p>
    <p>
        Nome: Viagem da minha vida

        Descrição: A mais aguardada do ano, 
        a mais esperado da aminha vida inteira!!!!!!!!!!!!!!!!!!!

        Planeta: Terra

        Duração: 80

        Data: 2021-12-10
    </p>

</div>

