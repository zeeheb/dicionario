import React, {Component} from "react";
import '../../styles/cadastrar.css'
import { useHistory } from 'react-router-dom'
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

function Cadastrar(props) {
    const history = useHistory();

    const backBtn = () => {
        history.push('/');
    }


    return (

        <div className="superContainer">
            <div className="navigation">
                <span className="titleHome">Dicionário Colaborativo de Libras</span>
            </div>

            <div className="shadow">
                <div className="cadastroqry">
                    <span className="titleCadastro">Cadastro de Palavra</span>
                </div>
            </div>
        <div className="form">

        </div>
        </div>
    );
}

export default Cadastrar;
