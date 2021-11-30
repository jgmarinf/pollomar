import React from 'react'
import pollo from "../assets/imagenPollo.png"


function Heder() {
    return (
        <div className= "heder">
            <div className="logo">
                <img src={pollo} alt="" className="pollo" />
            </div>
            <h2 className="bienvenidos">🔥 Bienvenidos a Pollomar 🔥</h2>
            {/* poner boton a la izquierda para crear un usuario y poner este mensaje si creas un usuario sera mas facil realizar el pedido tendras la direccion guardada 
            y no te tardara mucho pero si no quieres tamnbien puedes hacer el pedido 
            directamente sin usuario */}
            <p className="text">donde comprar es facilisimo</p>
        </div>
    )
}

export default Heder



