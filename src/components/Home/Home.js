import React, {Component} from "react";
import '../../styles/home.css'
import AddIcon from '@material-ui/icons/Add';


export class Home extends Component {
    render() {
        return (
            <div className="superContainer">
                <div className="navigation">
                    <span className="titleHome">Dicionário Colaborativo de Libras</span>
                    <button className="cadastrarBtn">Cadastre uma palavra <AddIcon/></button>
                </div>
                {/*<div className="query">*/}
                {/*    <span>Palavra</span>*/}
                {/*    <div className="searchWord">*/}
                {/*        <input type="text" placeholder="Busca por palavra..."/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="shadow">
                <div className="qry">
                    <span>Palavra</span>
                        <div className="searchWord">
                            <input type="text" placeholder="Busca por palavra..."/>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;
