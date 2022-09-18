import React, { Component } from 'react';

const AboutUs = () => {
    return ( 
        <div>
            <h1 className='inline'>¿Quienes</h1>
            <h1 className='blue-lbl'>Somos?</h1>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="container">
                            <div className="row">
                                <div className="info-rounded about-us-container">
                                hola
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="bg-secondary info-rounded about-us-container">
                                    hola
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-rounded about-us-container">
                                        adios
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="bg-secondary info-rounded about-us-container flex-fill">
                            Expandirse a todo gas papus
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;