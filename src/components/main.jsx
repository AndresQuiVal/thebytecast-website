import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { faRobot, faBook, faUsersBetweenLines, faCode } from '@fortawesome/free-solid-svg-icons';



class Main extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="col-md-3 align-self-center">
                            <h4>Aprender a programar
                            en comunidad - 
                            </h4>
                            <br></br>
                            <div className="title-container shadow">
                                <h2 className='blue-lbl'> <b>The ByteCast</b></h2>
                            </div>
                            
                        </div>
                        <div className="col-md-2">
                            <img src='https://cdn.discordapp.com/attachments/741841654042067033/1019813849756614746/unknown.png'
                                style={{
                                    height: '400px',
                                    width: '200px'
                                }}></img>
                        </div>
                        <div className="col-md-5">
                        <img src='https://cdn.discordapp.com/attachments/741841654042067033/1019814773568847882/unknown.png'
                                style={{
                                    height: '300px',
                                    width: '600px'
                                }}></img>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='info-rounded shadow'>
                        <h4>
                            "Una comunidad construida por programadores de todos los niveles"
                        </h4>
                        <br></br>
                        <br></br>

                        <div class="container-fluid align-items-center">
                            <div class="row">
                                <div class="col-md-6 text-right">
                                    <div class="tag tagR">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <FontAwesomeIcon icon={faRobot} size="3x" />
                                                </div>
                                                <div className="col-md-4">
                                                    <h4 className='text-align-center'>Bots de ayuda</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            Contamos con una gran variedad de m
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 text-left">
                                    <div class="tag tagL">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                <FontAwesomeIcon icon={faBook} size="3x" />
                                                </div>
                                                <div className="col-md-2">
                                                    <h4 className='text-align-center'>Recursos</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            Tenemos acceso a información como niveles de stock, early links, guías, y más.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 text-right">
                                    <div class="tag tagL">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                <FontAwesomeIcon icon={faUsersBetweenLines} size="3x" />
                                                </div>
                                                <div className="col-md-2">
                                                    <h4 className='text-align-center'>Comunidad de profesionales</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            Tenemos acceso a información como niveles de stock, early links, guías, y más.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 text-left">
                                    <div class="tag tagL">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                <FontAwesomeIcon icon={faCode} size="3x" />
                                                </div>
                                                <div className="col-md-4">
                                                    <h4 className='text-align-center'>Y más</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            Tenemos acceso a información como niveles de stock, early links, guías, y más.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <p>
                            - De ByteCast para ti en nuestro servidor oficial
                        </p>
                        <br></br>
                        <button id='join-btn' className='shadow'>UNIRME</button>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
            </div>
        );
    }
}
 
export default Main;