import React, {Component, useState} from "react";
import {configMaos} from "./config-maos";
import '../../styles/modal-config.css'
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "@material-ui/core";



function ModalConfigMaos(props) {


    return (
        <div className="conteiner">
            {
                configMaos.map(config => (
                        <div className="config-item">
                            <img src={config.url} alt={config.value} onClick={(e) => props.onClickConfig(e.target.alt)}/>
                        </div>

                ))
            }
        </div>
    );


};

export default ModalConfigMaos;
