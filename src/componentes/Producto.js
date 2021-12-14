import React from 'react'
import '../App.css';

const botonDeMas = ()=> {
    
}

function Producto ({name, costo, imagen}) {
    return (           
            <div className="card">
                <div className="row" id="alturaDeProducto">
                    <div className="col-2 overflow">
                        <img className="card-img-top" src={imagen} alt=""/>
                    </div>
                    <div className="col-8" id="name">
                        {name}
                    </div>
                    <div className="col-2" id="costoYconteo">
                        <div id="costo" className="col-2">
                            {costo}
                        </div>
                        <div id>
                        <button className="btn btn-outline-secondary" type="button" id="masYmenos"> + </button>
                        <button className="btn btn-outline-secondary" type="button" id="masYmenos"> − </button>
                        </div>
                    </div>
                </div>   
            </div>            
    )
}

export default Producto
