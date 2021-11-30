import React from 'react'
import '../App.css';

function Producto ({name,costo}) {
    console.log(name,costo)
    return (           
            <div className="card">
                <div className="row" id="alturaDeProducto">
                    <div className="col-3">
                        <img className="card-img-top" src="" alt=""/>
                    </div>
                    <div className="col-7">
                        {name}
                    </div>
                    <div className="col-2">
                        <div>
                            {costo}
                        </div>
                        <div>
                            Boton
                        </div>
                    </div>
                </div>   
            </div>            
    )
}

export default Producto
