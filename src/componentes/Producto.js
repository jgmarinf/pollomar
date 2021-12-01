import React from 'react'
import '../App.css';



function Producto ({name, costo, imagen}) {
    return (           
            <div className="card">
                <div className="row" id="alturaDeProducto">
                    <div className="col-2 overflow">
                        <img className="card-img-top" src={imagen} alt=""/>
                    </div>
                    <div className="col-8">
                        {name}
                    </div>
                    <div className="col-2">
                        <div id="costo" className="col-2">
                            {costo}
                        </div>
                        <div>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">agregar</button>
                        </div>
                    </div>
                </div>   
            </div>            
    )
}

export default Producto
