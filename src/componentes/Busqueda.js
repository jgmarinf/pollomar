import React from 'react'

function Busqueda() {
    return (
        <div className="container ">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Encuentrame mas rapido..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>  
            <p> 
            si creas un usuario sera mas facil realizar el pedido tendras la direccion guardada 
            y no te tardara mucho pero si no quieres tamnbien puedes hacer el pedido 
            directamente sin usuario
            </p>          
        </div>
    )
}

export default Busqueda
