import React, {Component, useState} from "react";
import '../../styles/home.css'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';


function Home(props) {
    const [inputPalavra, setInputPalavra] = useState('')
    const [nome, setNome] = useState('');
    const [regiao, setRegiao] = useState('');
    const [sinal, setSinal] = useState('');



    const history = useHistory();
    const handleClick = () => {
        history.push('/cadastrar');
    }

    const submitPalavra = () => {
        Axios.get(`http://localhost:3001/palavra/${inputPalavra}`)
            .then(response => {
                setNome(response.data[0].nome);
                setRegiao(response.data[0].regiao);
            })
    }

        return (
            <div className="superContainer">
                <div className="navigation">
                    <span className="titleHome">Dicionário Colaborativo de Libras</span>
                    <button onClick={handleClick} className="cadastrarBtn">
                            Cadastre uma palavra <AddIcon/>
                    </button>
                </div>

                <div className="shadow">
                <div className="qry">
                    <div className="palavra">
                        <span className="qryspan">Por Palavra</span>
                        <input onChange={(e) => {
                            setInputPalavra(e.target.value);
                        }} type="text" placeholder="        por palavra..."/>
                        <SearchIcon onClick={submitPalavra} className="searchicon"/>
                    </div>
                    <div className="alfabetica">
                        <span className="qryspan">Por ordem alfabética</span>
                        <input type="text" placeholder="      por ordem alfabética..."/>
                        <SearchIcon className="searchicon"/>
                    </div>
                    <div className="mao">
                        <span className="qryspan">Por configuração de mão</span>
                        <input type="text" placeholder=" por configuração de mão..."/>
                        <SearchIcon className="searchicon"/>
                    </div>
                </div>
                </div>

                <div className="infocontainer">
                    <div className="primeiraColuna">
                        <span className="colTitle">Palavra</span>
                        <hr className="line"/>
                        <div className="divResult">
                            <span className="colResult">{nome}</span>
                        </div>
                    </div>

                    <div className="segundaColuna">
                        <span className="colTitle">Sinal</span>
                        <hr className="line"/>
                        <div className="divResult">
                            <span className="colResult">{sinal}</span>
                        </div>
                    </div>

                    <div className="terceiraColuna">
                        <span className="colTitle">Região</span>
                        <hr className="line"/>
                        <div className="divResult">
                            <span className="colResult">{regiao}</span>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Home;
