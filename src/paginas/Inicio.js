import '../App.css';
import React from 'react'
import Heder from '../componentes/Heder';
import Productos from '../componentes/Productos';

function Inicio() {
    return (
        <div>
            <Heder/>
            <Productos/>
            <a href=''>
                <i className="fas fa-shopping-cart"></i>
            </a>
        </div>
    )
}

export default Inicio
