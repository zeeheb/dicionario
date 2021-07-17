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
import {Form} from "react-bootstrap";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

function Cadastrar(props) {
    const history = useHistory();
    const [palavra, setPalavra] = useState('');
    const [regiao, setRegiao] = useState('');
    const [qtdConfig, setQtdConfig] = useState('1');
    const [qtdPt, setQtdPt] = useState('1');
    const [qtdReg, setQtdReg] = useState('1');
    const [configMao1, setConfigMao1] = useState('');
    const [configMao2, setConfigMao2] = useState('');
    const [configMao3, setConfigMao3] = useState('');
    const [configMao4, setConfigMao4] = useState('');
    const [pontoArtic1, setPontoArtic1] = useState('');
    const [pontoArtic2, setPontoArtic2] = useState('');
    const [pontoArtic3, setPontoArtic3] = useState('');
    const [pontoArtic4, setPontoArtic4] = useState('');
    const [reg1, setReg1] = useState('');
    const [reg2, setReg2] = useState('');
    const [reg3, setReg3] = useState('');
    const [reg4, setReg4] = useState('');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [file, setFile] = useState('');


    const backBtn = () => {
        history.push('/');
    }

    const addRegistro = () => {
        console.log('palavra: ' +palavra, 'regiao: ' +regiao, 'config: ' +configMao1, 'artic:'+pontoArtic1);

        if (palavra === ''  || configMao1 === '' || pontoArtic1 === ''  || reg1 === '') {
            toast.error("Não deixe campos vazios!!");
            return;
        }

        let lsConfig = configMao1;
        if (configMao2 !== '' && qtdConfig >= '2') {
            lsConfig += ',' + configMao2;
        }
        if (configMao3 !== '' && qtdConfig >= '3') {
            lsConfig += ',' + configMao3;
        }
        if (configMao4 !== '' && qtdConfig === '4') {
            lsConfig += ',' + configMao4;
        }

        let lsPtArtic = pontoArtic1;
        if (pontoArtic2 !== '' && qtdPt >= '2') {
            lsPtArtic += ',' + pontoArtic2;
        }
        if (pontoArtic3 !== '' && qtdPt >= '3') {
            lsPtArtic += ',' + pontoArtic3;
        }
        if (pontoArtic4 !== '' && qtdPt === '4') {
            lsPtArtic += ',' + pontoArtic4;
        }

        let lsReg = reg1;
        if (reg2 !== '' && qtdReg >= '2') {
            lsReg += ',' + reg2;
        }
        if (reg3 !== '' && qtdReg >= '3') {
            lsReg += ',' + reg3;
        }
        if (reg4 !== '' && qtdReg === '4') {
            lsReg += ',' + reg4;
        }

        console.log(lsConfig, lsPtArtic, lsReg, file);
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData);

        Axios.post('http://127.0.0.1:3001/palavra/cadastrar', {
            palavra: palavra,
            regiao: lsReg,
            config: lsConfig,
            pontoArtic: lsPtArtic,
        }).then((response) => {
            Axios.post('http://127.0.0.1:3001/palavra/upload',
                formData,
                { headers: {
                        'Content-Type': 'multipart/form-data'
                    }
            });

            lsPtArtic = '';
            lsConfig = '';
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

    const openModal2 = () => {
        setShow2(true);
    }

    const openModal3 = () => {
        setShow3(true);
    }

    const openModal4 = () => {
        setShow4(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleClose2 = () => {
        setShow2(false);
    }

    const handleClose3 = () => {
        setShow3(false);
    }

    const handleClose4 = () => {
        setShow4(false);
    }

    return (

        <div className="superContainer">
            <div className="navigation">
                <KeyboardReturnIcon onClick={backBtn} className="menuBtn"></KeyboardReturnIcon>
                <span onClick={backBtn} className="titleHome">Dicionário Colaborativo de Libras</span>
            </div>

            <div className="shadow">
                <div className="cadastroqry">
                    <span className="titleCadastro">Cadastro de Palavra</span>
                </div>
            </div>
            <div className="form">
                <label htmlFor="palavra">Palavra <span className="red-star">*</span></label>
                <div className="input">
                    <input name="palavra" type="text" onChange={(event) => {
                        setPalavra(event.target.value);
                    }}/>
                </div>
                <label htmlFor="regiao" >Região de Uso <span className="red-star">*</span></label>
                <h3>Quantidade</h3>
                <select onChange={(e) => {
                    setQtdReg(e.target.value);
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div className="input">
                    <select name="estados-brasil" onChange={(event) => {
                        setReg1(event.target.value);
                    }}>
                        <option disabled selected value></option>
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
                {
                    qtdReg >= "2" &&
                    <div className="input">
                        <select name="estados-brasil" onChange={(event) => {
                            setReg2(event.target.value);
                        }}>
                            <option disabled selected value></option>
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

                }
                {
                    qtdReg >= "3" &&
                    <div className="input">
                        <select name="estados-brasil" onChange={(event) => {
                            setReg3(event.target.value);
                        }}>
                            <option disabled selected value></option>
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

                }
                {
                    qtdReg === "4" &&
                    <div className="input">
                        <select name="estados-brasil" onChange={(event) => {
                            setReg4(event.target.value);
                        }}>
                            <option disabled selected value></option>
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

                }

                <label htmlFor="articulacao">Ponte de Articulação <span className="red-star">*</span></label>
                <h3>Quantidade</h3>
                <select onChange={(e) => {
                    setQtdPt(e.target.value);
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div className="input-articulacao">
                    <select name="articulacao" type="text" onChange={(event) => {
                        setPontoArtic1(event.target.value);
                    }}>
                        <option disabled selected value></option>
                        <option value="1">Cabeça</option>
                        <option value="2">Tronco</option>
                        <option value="3">Mãos</option>
                        <option value="4">Espaço Neutro</option>
                    </select>
                    { qtdPt >= "2" &&
                        <select name="articulacao" type="text" onChange={(event) => {
                            setPontoArtic2(event.target.value);
                        }}>
                            <option disabled selected value></option>
                            <option value="1">Cabeça</option>
                            <option value="2">Tronco</option>
                            <option value="3">Mãos</option>
                            <option value="4">Espaço Neutro</option>
                        </select>
                    }
                    {
                        qtdPt >= "3" &&

                        <select name="articulacao" type="text" onChange={(event) => {
                            setPontoArtic3(event.target.value);
                        }}>
                            <option disabled selected value></option>
                            <option value="1">Cabeça</option>
                            <option value="2">Tronco</option>
                            <option value="3">Mãos</option>
                            <option value="4">Espaço Neutro</option>
                        </select>
                    }
                    {
                        qtdPt === "4" &&

                        <select name="articulacao" type="text" onChange={(event) => {
                            setPontoArtic4(event.target.value);
                        }}>
                            <option disabled selected value></option>
                            <option value="1">Cabeça</option>
                            <option value="2">Tronco</option>
                            <option value="3">Mãos</option>
                            <option value="4">Espaço Neutro</option>
                        </select>
                    }
                </div>

                <label htmlFor="config">Configuração de Mão <span className="red-star">*</span></label>
                <h3>Quantidade</h3>
                <select onChange={(e) => {
                    setQtdConfig(e.target.value);
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div className="input">

                    <div className="box-input-config">
                        <span className="box-choice" onClick={openModal}>
                            <img src={configMao1 != '' ? `./config-maos/${configMao1}.jpg` : ''}/>
                        </span>
                        <span className="box-icon" onClick={openModal}>
                         <AddIcon/>
                        </span>
                    </div>
                    {
                        qtdConfig >= "2" &&
                        <div className="box-input-config">
                        <span className="box-choice" onClick={openModal2}>
                            <img src={configMao2 != '' ? `./config-maos/${configMao2}.jpg` : ''}/>
                        </span>
                            <span className="box-icon" onClick={openModal2}>
                         <AddIcon/>
                        </span>
                        </div>
                    }
                    {
                        qtdConfig >= "3" &&
                        <div className="box-input-config">
                        <span className="box-choice" onClick={openModal3}>
                            <img src={configMao3 != '' ? `./config-maos/${configMao3}.jpg` : ''}/>
                        </span>
                            <span className="box-icon" onClick={openModal3}>
                         <AddIcon/>
                        </span>
                        </div>
                    }
                    {
                        qtdConfig === "4" &&
                        <div className="box-input-config">
                        <span className="box-choice" onClick={openModal4}>
                            <img src={configMao4 != '' ? `./config-maos/${configMao4}.jpg` : ''}/>
                        </span>
                            <span className="box-icon" onClick={openModal4}>
                         <AddIcon/>
                        </span>
                        </div>
                    }
                </div>

                <label htmlFor="regiao">Imagem/Vídeo</label>
                <div className="input-vid">
                    <input name="regiao" type="file" onChange={(event) => {
                        setFile(event.target.files[0]);
                    }}/>
                </div>

                <Dialog transitionDuration={{enter: 300, exit: 500}} maxWidth="md" onClose={handleClose}
                        aria-labelledby="simple-dialog-title" open={show}>
                    <DialogTitle id="simple-dialog-title">
                        <div className="box-dialog" style={{textAlign: 'center'}}>
                            <b style={{fontSize: '45px', color: '#696df6'}}>Escolha uma Configuração de Mão</b>
                            <hr/>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <ModalConfigMaos onClickConfig={value => {
                            setConfigMao1(value);
                            setShow(false);
                        }}/>
                    </DialogContent>
                </Dialog>

                    <Dialog transitionDuration={{enter: 300, exit: 500}} maxWidth="md" onClose={handleClose2}
                            aria-labelledby="simple-dialog-title" open={show2}>
                        <DialogTitle id="simple-dialog-title">
                            <div className="box-dialog" style={{textAlign: 'center'}}>
                                <b style={{fontSize: '45px', color: '#696df6'}}>Escolha uma Configuração de Mão</b>
                                <hr/>
                            </div>
                        </DialogTitle>
                        <DialogContent>
                            <ModalConfigMaos onClickConfig={value => {
                                setConfigMao2(value);
                                setShow2(false);
                            }}/>
                        </DialogContent>
                    </Dialog>

                <Dialog transitionDuration={{enter: 300, exit: 500}} maxWidth="md" onClose={handleClose3}
                        aria-labelledby="simple-dialog-title" open={show3}>
                    <DialogTitle id="simple-dialog-title">
                        <div className="box-dialog" style={{textAlign: 'center'}}>
                            <b style={{fontSize: '45px', color: '#696df6'}}>Escolha uma Configuração de Mão</b>
                            <hr/>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <ModalConfigMaos onClickConfig={value => {
                            setConfigMao3(value);
                            setShow3(false);
                        }}/>
                    </DialogContent>
                </Dialog>
                <Dialog transitionDuration={{enter: 300, exit: 500}} maxWidth="md" onClose={handleClose4}
                        aria-labelledby="simple-dialog-title" open={show4}>
                    <DialogTitle id="simple-dialog-title">
                        <div className="box-dialog" style={{textAlign: 'center'}}>
                            <b style={{fontSize: '45px', color: '#696df6'}}>Escolha uma Configuração de Mão</b>
                            <hr/>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <ModalConfigMaos onClickConfig={value => {
                            setConfigMao4(value);
                            setShow4(false);
                        }}/>
                    </DialogContent>
                </Dialog>

                <div>
                    <button onClick={addRegistro} className="cadastrarBtn2">Submeter</button>
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
