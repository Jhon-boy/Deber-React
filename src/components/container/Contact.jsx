import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../Estilos/style.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            conectado: false
        }
    }


    render() {
        return (
            <div>
            <h4 className='texts'>
                ESTADO: <button className='Boton'>{this.props.conectado ? 'Contacto En Línea': 'Contacto No Disponible'}</button> 
            </h4>

            </div>
        );
    }

}


Contact.propTypes = {
    conectado: PropTypes.bool,
};


export default Contact;
