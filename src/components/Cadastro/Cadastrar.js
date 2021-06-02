import React, {Component, useState} from "react";
import '../../styles/cadastrar.css'
import { useHistory } from 'react-router-dom'


function Cadastrar(props) {
    const history = useHistory();
    const[palavra, setPalavra] = useState('');
    const[regiao, setRegiao] = useState('');

    const backBtn = () => {
        history.push('/');
    }


    return (

        <div className="superContainer">
            <div className="navigation">
                <span onClick={backBtn} className="titleHome">Dicionário Colaborativo de Libras</span>
            </div>

            <div className="shadow">
                <div className="cadastroqry">
                    <span className="titleCadastro">Cadastro de Palavra</span>
                </div>
            </div>
        <div className="form">
            <div className="input">
                <label htmlFor="palavra">Palavra</label>
                <input name="palavra" type="text" onChange={(event) => {
                    setPalavra(event.target.value);
                }}/>
            </div>
            <div className="input">
                <label htmlFor="regiao">Região</label>
                <input name="regiao" type="text" onChange={(event) => {
                    setRegiao(event.target.value);
                }}/>
            </div>

            <div>
                <button className="cadastrarBtn2">Submeter</button>
            </div>
        </div>
        </div>
    );
}

export default Cadastrar;
