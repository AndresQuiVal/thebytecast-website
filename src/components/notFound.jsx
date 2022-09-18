import React, { Component } from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NotFound extends Component {
    state = {  } 
    render() { 
        return (
            <div className='align-items-center'>
                <h3 className='align-self-center'>
                    La pagina que buscas no existe... :(
                </h3>
                <FontAwesomeIcon className='align-self-center' icon={faCode} size="3x" />
            </div>
        );
    }
}
 
export default NotFound;