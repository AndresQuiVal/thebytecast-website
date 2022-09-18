import React, { Component } from 'react';

const Discord = () => {
    return ( 
        <div>
            <h3>¿Como unirse a nuestro servidor de Discord?</h3>
            <br></br><br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h4>
                            ¿C&oacute;mo unirte al servidor?
                        </h4>
                        <br></br>
                        <p>
                            Te unes asi: primero te metes al link, despues le das a aceptar<br></br>
                            etc, etc , etc, <br></br>
                        </p>
                        <br></br>
                        <br></br>
                        <div className="gold-subscription">
                            <br></br>
                            <h4 className='gold-title'><b>GOLD</b> subscription</h4>
                            <p>
                                <h5>Qué es?</h5>
                                <p>Con la suscripcion GOLD obtienes más beneficios de los que te imaginas</p>
                            </p>
                            <button>Adquirir mi suscripcion GOLD</button>
                        </div>
                        <br></br>
                    </div>
                    <div className="col-md-5">
                        <div className="info-rounded">
                            <h4>¿Qué es Discord?</h4>
                            <small><a href='https://discord.com/' target={"_blank"}>Docs oficiales de Discord</a></small>
                            <br></br><br></br>
                            <p className='text-align-left'>Discord es la plataforma donde todos los canales estan distrbuidos, 
                                aqui nosotros organizamos todo
                                tenemos:
                                <ul>
                                    <li>
                                        Canales
                                    </li>
                                    <li>
                                        Usuarios
                                    </li>
                                    <li>
                                        Bots
                                    </li>
                                    <li>
                                        Etc.
                                    </li>
                                </ul>
                            </p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Discord;