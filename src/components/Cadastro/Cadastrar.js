import React, {Component, useState} from "react";
import Axios from 'axios';
import '../../styles/cadastrar.css'
import {useHistory} from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import Confirm from 'react-confirm-bootstrap';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import ModalConfigMaos from "./ModalConfigMaos";
import {DialogContent} from "@material-ui/core";


function Cadastrar(props) {
    const history = useHistory();
    const [palavra, setPalavra] = useState('');
    const [regiao, setRegiao] = useState('');
    const [configMao, setConfigMao] = useState('');
    const [classifMao, setClassifMao] = useState('');
    const [pontoArtic, setPontoArtic] = useState('');
    const [show, setShow] = useState(false);


    const backBtn = () => {
        history.push('/');
    }

    const addRegistro = () => {
        console.log(palavra + ' ' + regiao);
        if (palavra == '' || regiao == '') {
            toast.error("Não deixe campos vazios!!");
            return;
        }
        Axios.post('http://127.0.0.1:3001/cadastrar', {
            palavra: palavra,
            regiao: regiao
        }).then((response) => {
            console.log(response);
            toast.success("Submetido com Sucesso!")
        })
    }

    const onConfirm = () => {
        addRegistro();
    }

    const openModal = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
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
                <label htmlFor="palavra">Palavra</label>
                <div className="input">
                    <input name="palavra" type="text" onChange={(event) => {
                        setPalavra(event.target.value);
                    }}/>
                </div>
                <label htmlFor="regiao">Região de Uso</label>
                <div className="input">
                    <select name="estados-brasil">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>

                <label htmlFor="regiao">Ponte de Articulação</label>
                <div className="input">
                    <input name="regiao" type="text" onChange={(event) => {
                        setRegiao(event.target.value);
                    }}/>
                </div>

                <label htmlFor="regiao">Configuração de Mão</label>
                <div className="input">
                    <div className="box-input-config">
                        <span className="box-choice" onClick={openModal}>
                            <img src={configMao != '' ? `./config-maos/${configMao}.jpg` : ''}/>
                        </span>
                        <span className="box-icon" onClick={openModal}>
                         <AddIcon/>
                        </span>
                    </div>
                </div>

                <label htmlFor="regiao">Vídeo</label>
                <div className="input">
                    <input name="regiao" type="text" onChange={(event) => {
                        setRegiao(event.target.value);
                    }}/>
                </div>

                <Dialog transitionDuration={{enter: 500, exit: 500}} maxWidth="md" onClose={handleClose}
                        aria-labelledby="simple-dialog-title" open={show}>
                    <DialogTitle id="simple-dialog-title">
                        <b style={{fontSize: '30px'}}>Escolha uma Configuração de Mão</b>
                    </DialogTitle>
                    <DialogContent>
                        <ModalConfigMaos onClickConfig={value => {
                            setConfigMao(value);
                            setShow(false);
                        }}/>
                    </DialogContent>
                </Dialog>

                <div>
                    <button onClick={openModal} className="cadastrarBtn2">Submeter</button>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
}

export default Cadastrar;
