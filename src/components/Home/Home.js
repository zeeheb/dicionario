import React, {Component} from "react";
import '../../styles/home.css'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

export class Home extends Component {
    render() {
        return (
            <div className="superContainer">
                <div className="navigation">
                    <span className="titleHome">Dicionário Colaborativo de Libras</span>
                    <button className="cadastrarBtn">Cadastre uma palavra <AddIcon/></button>
                </div>

                <div className="shadow">
                <div className="qry">
                    <div className="palavra">
                        <span>Por Palavra</span>
                        <input type="text" placeholder="Busca por palavra..."/>
                        <SearchIcon className="searchicon"/>
                    </div>
                    <div className="alfabetica">
                        <span>Por ordem alfabética</span>
                        <input type="text" placeholder="Busca por palavra..."/>
                        <SearchIcon className="searchicon"/>
                    </div>
                    <div className="mao">
                        <span>Por configuração de mão</span>
                        <input type="text" placeholder="Busca por palavra..."/>
                        <SearchIcon className="searchicon"/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;
