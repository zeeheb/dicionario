import React, {Component, useState} from "react";
import '../../styles/modal-menu.css'
import 'react-toastify/dist/ReactToastify.css';
import AccountIcon from '@material-ui/icons/AccountCircle';
import AdmIcon from '@material-ui/icons/SupervisorAccountRounded';


function ModalMenu(props) {


    return (
        <div className="menu-container">
            <div className="login">
                <button className="loginBtn">
                    <AccountIcon />
                    <span>Acessar</span>
                </button>
            </div>

            <div className="painel">
                <button className="painelBtn">
                    <AdmIcon />
                    <span>Painel Adm</span>
                </button>
            </div>
        </div>
    );


};

export default ModalMenu;
