import React, { Component } from 'react';

class Mensaje extends Component{
    render(){
        return (
            <h1>Soy un mensaje Comp {this.props.name}</h1>
        );
    }
}

export default Mensaje;