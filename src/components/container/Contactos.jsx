import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from '../container/Contact';
import '../../Estilos/style.css';

class Contactos extends Component {
    constructor(props){
        super(props);
        this.state = {
            conectado: false
        }
    }


    render() {
        return (
            <div>
            <form className='Formulario'>
                 <h4 className='texts'>
                NOMBRE:  <input className='inputs' value={ this.props.nombre}></input>
            </h4>

            <h4 className='texts'>
                APELLIDO: <input className='inputs' value={this.props.apellido} ></input> 
            </h4>
            <h4 className='texts'>
                EMAIL: <input  className='inputs' value= {this.props.email}></input>
            </h4>
            <div>
            <Contact conectado></Contact>
            </div>
            </form>
           
                
            </div>
        );
    }

}


Contactos.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,

};


export default Contactos;
