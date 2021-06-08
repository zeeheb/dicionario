import React, {Component, useState} from "react";
import {configMaos} from "./config-maos";
import '../../styles/modal-config.css'
import 'react-toastify/dist/ReactToastify.css';






function ModalConfigMaos(props) {


    return (
        <div className="conteiner">
            {
                configMaos.map(config => (
                    <div className="config-item">
                        <img src={config.url} alt={config.value}/>
                    </div>
                ))
            }
        </div>
    );

}

export default ModalConfigMaos;
