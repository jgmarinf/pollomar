import React from 'react'
import Producto from './Producto'
import '../App.css';
// el problema de importacion de imagenes era porque unas .png son en mayusculas y otras en minusculas unas en jpg y otras en png 

import	img1	from	"../imagenes/72.JPG"
import	img2	from	"../imagenes/73.JPG"
import	img3	from	"../imagenes/74.JPG"
import	img4	from	"../imagenes/75.JPG"
import	img5	from	"../imagenes/92.PNG"
import	img6	from	"../imagenes/93.PNG"
import	img7	from	"../imagenes/94.PNG"
import	img8	from	"../imagenes/95.PNG"
import	img9	from	"../imagenes/96.PNG"
import	img10	from	"../imagenes/76.JPG"
import	img11	from	"../imagenes/77.jpg"
import	img12	from	"../imagenes/78.JPG"
import	img13	from	"../imagenes/79.JPG"
import	img14	from	"../imagenes/80.jpg"
import	img15	from	"../imagenes/81.jpg"
import	img16	from	"../imagenes/82.JPG"
import	img17	from	"../imagenes/83.JPG"
import	img18	from	"../imagenes/33.png"
import	img19	from	"../imagenes/32.png"
import	img20	from	"../imagenes/31.png"
import	img21	from	"../imagenes/60.png"
import	img22	from	"../imagenes/84.JPG"
import	img23	from	"../imagenes/61.png"
import	img24	from	"../imagenes/63.png"
import	img25	from	"../imagenes/88.PNG"
import	img26	from	"../imagenes/64.png"
import	img27	from	"../imagenes/89.PNG"
import	img28	from	"../imagenes/90.PNG"
import	img29	from	"../imagenes/97.PNG"
import	img30	from	"../imagenes/98.PNG"
import	img31	from	"../imagenes/57.png"
import	img32	from	"../imagenes/59.png"
import	img33	from	"../imagenes/34.png"
import	img34	from	"../imagenes/35.png"
import	img35	from	"../imagenes/36.png"
import	img36	from	"../imagenes/37.png"
import	img37	from	"../imagenes/39.png"
import	img38	from	"../imagenes/40.png"
import	img39	from	"../imagenes/99.PNG"
import	img40	from	"../imagenes/41.png"
import	img41	from	"../imagenes/43.png"
import	img42	from	"../imagenes/44.png"
// import	img43	from	"../imagenes/#.PNG"
// import	img44	from	"../imagenes/#.PNG"
import	img45	from	"../imagenes/69.png"
import	img46	from	"../imagenes/70.png"
import	img47	from	"../imagenes/48.png"
import	img48	from	"../imagenes/34.png"
import	img49	from	"../imagenes/47.png"
// import	img50	from	"../imagenes/#.PNG"
import	img51	from	"../imagenes/49.png"
// import	img52	from	"../imagenes/#.PNG"
import	img53	from	"../imagenes/51.png"
// import	img54	from	"../imagenes/#.PNG"
import	img55	from	"../imagenes/71.png"
import	img56	from	"../imagenes/85.png"
import	img57	from	"../imagenes/86.png"
import	img58	from	"../imagenes/87.png"
// import	img59	from	"../imagenes/26.PNG"
// import	img60	from	"../imagenes/#.PNG"
import	img61	from	"../imagenes/66.PNG"
import	img62	from	"../imagenes/01.png"
import	img63	from	"../imagenes/05.png"
// import	img64	from	"../imagenes/#.PNG"
import	img65	from	"../imagenes/15.png"
import	img66	from	"../imagenes/17.png"
import	img67	from	"../imagenes/21.png"
import	img68	from	"../imagenes/25.png"
import	img69	from	"../imagenes/13.png"
import	img70	from	"../imagenes/19.png"
import	img71	from	"../imagenes/11.png"
import	img72	from	"../imagenes/07.png"
import	img73	from	"../imagenes/65.png"
import	img74	from	"../imagenes/67.PNG"
import	img75	from	"../imagenes/68.PNG"
import	img76	from	"../imagenes/91.PNG"
import { useState, ChangeEvent } from 'react';





const datos= [
	{id:1	,name:"	Arepa de chocolo x5 - Q rico                 ",cost_und:"$ 2.700	",grupo:"	AREPAS	        ",imagen_URL: img1		},	
	{id:2	,name:"	Arepa - neirana	                             ",cost_und:"$ 2.600	",grupo:"	AREPAS	        ",imagen_URL: img2		},	
	{id:3	,name:"	Arepa pequeña - buena arepa	                 ",cost_und:"$ 1.100	",grupo:"	AREPAS	        ",imagen_URL: img3		},	
	{id:4	,name:"	Arepa grande - buena arepa	                 ",cost_und:"$ 1.300	",grupo:"	AREPAS	        ",imagen_URL: img4		},	
	{id:5	,name:"	Yogurt alpina x150 gr	                     ",cost_und:"$ 1.900	",grupo:"	YOGURT	        ",imagen_URL: img5		},	
	{id:6	,name:"	Yogurt normandy x180 gr	                     ",cost_und:"$ 2.200	",grupo:"	YOGURT	        ",imagen_URL: img6		},	
	{id:7	,name:"	Kumis alpina x150 gr	                     ",cost_und:"$ 2.200	",grupo:"	YOGURT	        ",imagen_URL: img7		},	
	{id:8	,name:"	Bon Yurt	                                 ",cost_und:"$ 3.000	",grupo:"	YOGURT	        ",imagen_URL: img8		},	
	{id:9	,name:"	Yox x100 gr	                                 ",cost_und:"$ 1.900	",grupo:"	YOGURT	        ",imagen_URL: img9		},	
	{id:10	,name:"	Pan bimbo grande	                         ",cost_und:"$ 4.800	",grupo:"	PANADERIA	    ",imagen_URL: img10	},	
	{id:11	,name:"	Tostada bimbo mantequilla	                 ",cost_und:"$ 3.200	",grupo:"	PANADERIA	    ",imagen_URL: img11	},	
	{id:12	,name:"	Tostada bimbo integral	                     ",cost_und:"$ 3.700	",grupo:"	PANADERIA	    ",imagen_URL: img12	},	
	{id:13	,name:"	Chocoso bimbo	                             ",cost_und:"$ 1.200	",grupo:"	PANADERIA	    ",imagen_URL: img13	},	
	{id:14	,name:"	Panque bimbo	                             ",cost_und:"$ 1.100	",grupo:"	PANADERIA	    ",imagen_URL: img14	},	
	{id:15	,name:"	Browni Mini	                                 ",cost_und:"$ 600	    ",grupo:"	PANADERIA	    ",imagen_URL: img15	},	
	{id:16	,name:"	Cocada	                                     ",cost_und:"$ 450	    ",grupo:"	PANADERIA	    ",imagen_URL: img16	},	
	{id:17	,name:"	Panelita	                                 ",cost_und:"$ 350	    ",grupo:"	PANADERIA	    ",imagen_URL: img17	},	
	{id:18	,name:"	Crema de leche x100 gramos	                 ",cost_und:"$ 1.400	",grupo:"	CREMA DE LECHE	",imagen_URL: img18	},	
	{id:19	,name:"	Crema de leche x200 gramos	                 ",cost_und:"$ 2.400	",grupo:"	CREMA DE LECHE	",imagen_URL: img19	},	
	{id:20	,name:"	Crema de leche x1000 gramos	                 ",cost_und:"$ 12.500	",grupo:"	CREMA DE LECHE	",imagen_URL: img20	},	
	{id:21	,name:"	Papa a la francesa x2.5 kg	                 ",cost_und:"$ 16.000	",grupo:"	CHIPS	        ",imagen_URL: img21	},	
	{id:22	,name:"	Papa a la francesa x500 gr	                 ",cost_und:"$ 3.800	",grupo:"	CHIPS	        ",imagen_URL: img22	},	
	{id:23	,name:"	Maíz tierno	                                 ",cost_und:"$ 9.500	",grupo:"	CHIPS	        ",imagen_URL: img23	},	
	{id:24	,name:"	Maíz arveja, maíz, zanahoria x500 gr	     ",cost_und:"$ 4.800	",grupo:"	CHIPS	        ",imagen_URL: img24	},	
	{id:25	,name:"	Maíz arveja, maíz, zanahoria x1000 gr	     ",cost_und:"$ 9.000	",grupo:"	CHIPS	        ",imagen_URL: img25	},	
	{id:26	,name:"	Yuca x 1000 gr	                             ",cost_und:"$ 5.400	",grupo:"	CHIPS	        ",imagen_URL: img26	},	
	{id:27	,name:"	Arroz Diana	                                 ",cost_und:"$ 1.400	",grupo:"	GRANOS	        ",imagen_URL: img27	},	
	{id:28	,name:"	Arroz Carolina	                             ",cost_und:"$ 1.400	",grupo:"	GRANOS	        ",imagen_URL: img28	},	
	{id:29	,name:"	Lenteja	                                     ",cost_und:"$ 2.300	",grupo:"	GRANOS	        ",imagen_URL: img29	},	
	{id:30	,name:"	Frijol	                                     ",cost_und:"$ 3.000	",grupo:"	GRANOS	        ",imagen_URL: img30	},	
	{id:31	,name:"	Camarón titi 200/300 - kg	                 ",cost_und:"$ 23.000	",grupo:"	MARISCOS	    ",imagen_URL: img31	},	
	{id:32	,name:"	Camarón tigre 51/60 - kg	                 ",cost_und:"$ 34.000	",grupo:"	MARISCOS	    ",imagen_URL: img32	},	
	{id:33	,name:"	Pechuga blanca refrigerada - kg 	         ",cost_und:"$ 12.400	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img33	},	
	{id:34	,name:"	Pechuga blanca congelada - kg       	     ",cost_und:"$ 12.400	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img34	},	
	{id:35	,name:"	Pechuga campesina - kg 	                     ",cost_und:"$ 13.000	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img35	},	
	{id:36	,name:"	Muslo campesino - kg 	                     ",cost_und:"$ 7.000	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img36	},	
	{id:37	,name:"	Contramuslo campesino - kg 	                 ",cost_und:"$ 6.800	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img37	},	
	{id:38	,name:"	Filete de pechuga - kg 	                     ",cost_und:"$ 19.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img38	},	
	{id:39	,name:"	Pernil - kg 	                             ",cost_und:"$ 6.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img39	},	
	{id:40	,name:"	Ala campesina - kg 	                         ",cost_und:"$ 8.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img40	},	
	{id:41	,name:"	Ala sin costillar adobada  x14 	             ",cost_und:"$ 14.000	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img41	},	
	{id:42	,name:"	Ala sin costillar - kg 	                     ",cost_und:"$ 11.200	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img42	},	
	// {id:43	,name:"	Recorte con pechuga - bandeja       	     ",cost_und:"$- 	    ",grupo:"	POLLO MACPOLLO 	",imagen_URL: img43   },	
	// {id:44	,name:"	Víscera corriente - bandeja 	             ",cost_und:"$ 1.400	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img44   },	
	{id:45	,name:"	Hígado - bandeja 	                         ",cost_und:"$ 3.200	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img45	},	
	{id:46	,name:"	Molleja - bandeja 	                         ",cost_und:"$ 4.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img46	},	
	{id:47	,name:"	Molipollo - unidad 	                         ",cost_und:"$ 3.100	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img47	},	
	{id:48	,name:"	Pollo entero - kg	                         ",cost_und:"$ 9.300	",grupo:"	POLLO MACPOLLO 	",imagen_URL: img48	},	
	{id:49	,name:"	Mojarra 230 gr hasta 550 gr - kg 	         ",cost_und:"$ 15.000	",grupo:"	PESCADO 	    ",imagen_URL: img49	},	
	// {id:50	,name:"	Trucha 250 gr hasta 450 gr - kg 	         ",cost_und:"$ 24.000	",grupo:"	PESCADO 	    ",imagen_URL: img50   },	
	{id:51	,name:"	Filete de pescado  x 4 - x 5 - x 6 - paquete ",cost_und:"$ 13.000	",grupo:"	PESCADO 	    ",imagen_URL: img51	},	
	// {id:52	,name:"	Bagre porcionado - kg 	                     ",cost_und:"$ 11.000	",grupo:"	PESCADO 	    ",imagen_URL: img52   },	
	{id:53	,name:"	Salmón - kg 	                             ",cost_und:"$ 45.000	",grupo:"	PESCADO 	    ",imagen_URL: img53	},	
	// {id:54	,name:"	Recorte de pescado - kg	                     ",cost_und:"$ 4.500	",grupo:"	PESCADO 	    ",imagen_URL: img54   },	
	{id:55	,name:"	Queso cuajada - kg 	                         ",cost_und:"$ 10.300	",grupo:"	QUESO 	        ",imagen_URL: img55	},	
	{id:56	,name:"	Queso campesino - lb 	                     ",cost_und:"$ 5.500	",grupo:"	QUESO 	        ",imagen_URL: img56	},	
	{id:57	,name:"	Queso doble crema entero - bloque 	         ",cost_und:"$ 38.500	",grupo:"	QUESO 	        ",imagen_URL: img57	},	
	{id:58	,name:"	Queso doble crema tajado - bloque 	         ",cost_und:"$ 38.500	",grupo:"	QUESO 	        ",imagen_URL: img58	},	
	// {id:59	,name:"	Queso doble crema tajado - lb 	             ",cost_und:"$ 7.000	",grupo:"	QUESO 	        ",imagen_URL: img59	},	
	// {id:60	,name:"	Queso doble crema entero - kg 	             ",cost_und:"$ 16.000	",grupo:"	QUESO 	        ",imagen_URL: img60	},
	{id:61	,name:"	Cubeta huevo AA	                             ",cost_und:"$ 13.000	",grupo:"	HUEVO 	        ",imagen_URL: img61	},	
	{id:62	,name:"	Chorizo santarrosano - x5 unidades 	         ",cost_und:"$ 7.000	",grupo:"	CARNES FRIAS 	",imagen_URL: img62   },	
	{id:63	,name:"	Hamburguesa de carne - 10 unidades 	         ",cost_und:"$ 6.500	",grupo:"	CARNES FRIAS 	",imagen_URL: img63   },	
	// {id:64	,name:"	Salchichón cervecero ahumado 	             ",cost_und:"$ 5.800	",grupo:"	CARNES FRIAS 	",imagen_URL: img64   },	
	{id:65	,name:"	Salchichón cerveroni - ZENU 	             ",cost_und:"$ 19.800	",grupo:"	CARNES FRIAS 	",imagen_URL: img65	},	
	{id:66	,name:"	Trompa ahumada 	                             ",cost_und:"$ 5.000	",grupo:"	CARNES FRIAS 	",imagen_URL: img66	},	
	{id:67	,name:"	Ranchera - x5 unidades - ZENU 	             ",cost_und:"$ 4.000	",grupo:"	CARNES FRIAS 	",imagen_URL: img67	},	
	{id:68	,name:"	Jamón x 400 gr - RICA 	                     ",cost_und:"$ 7.700	",grupo:"	CARNES FRIAS 	",imagen_URL: img68	},	
	{id:69	,name:"	Jamón Calima 	                             ",cost_und:"$ 5.400	",grupo:"	CARNES FRIAS 	",imagen_URL: img69	},	
	{id:70	,name:"	Salchicha manguera - unidad 	             ",cost_und:"$ 1.200	",grupo:"	CARNES FRIAS 	",imagen_URL: img70	},	
	{id:71	,name:"	Albondiga x10  unidades 	                 ",cost_und:"$ 6.800	",grupo:"	CARNES FRIAS 	",imagen_URL: img71	},	
	{id:72	,name:"	Tocineta x 250 gr 	                         ",cost_und:"$ 6.800	",grupo:"	CARNES FRIAS 	",imagen_URL: img72   },	
	{id:73	,name:"	Tocineta 1 kilo 	                         ",cost_und:"$ 18.000	",grupo:"	CARNES FRIAS 	",imagen_URL: img73	},	
	{id:74	,name:"	Leche alquería larga vida 	                 ",cost_und:"$ 3.400	",grupo:"	LECHE 	        ",imagen_URL: img74	},	
	{id:75	,name:"	Leche alquería deslactosada larga vida 	     ",cost_und:"$ 3.500	",grupo:"	LECHE 	        ",imagen_URL: img75	},	
	{id:76	,name:"	Leche puro campo	                         ",cost_und:"$ 2.100	",grupo:"	LECHE 	        ",imagen_URL: img76	}	
]

function Productos () {

	const [currentPage, setcurrentPage] = useState(0);
	
	const [search, setSearch] = useState("");

	const filteredProductos =() : dato[] => {
		if( search.length === 0)
			return datos.slice(currentPage, currentPage + 10);


		const filtere = datos.filter( 
			dat => dat.grupo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(search));
				return filtere.slice(currentPage, currentPage + 10);
	}

	const prevPage = () => {
		if ( currentPage > 0)
		setcurrentPage ( currentPage - 10);
	}


	const netxPage = () => {
		if ( datos.filter( dat => dat.grupo.includes(search) ).length > currentPage +10 )
			setcurrentPage ( currentPage + 10);
	}

	const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {
		setcurrentPage(0);
		setSearch( target.value );
	}


    return (
		<><div className="container ">
			<div className="input-group mb-3">
				<input
					id="formulario"
					type="text"
					className="form-control"
					placeholder="Encuentrame mas rapido..."
					value = { search }
					onChange = {onSearchChange}
					/>

				<button className="btn btn-outline-secondary"
					type="button"
					id="button-addon2">Buscar</button>
			</div>
			<p>
				si creas un usuario sera mas facil realizar el pedido tendras la direccion guardada
				y no te tardara mucho pero si no quieres tamnbien puedes hacer el pedido
				directamente sin usuario
			</p>
			&nbsp;
			<div>
				<button className='btn btn-primary' 
				onClick={prevPage}> 
					anteriores
				</button>
				&nbsp;
				<button className='btn btn-primary' 
				onClick={netxPage}> 
					siguientes
				</button>
			</div>
		</div>

		<div className="container" id="container">
				<div className="row">
					{filteredProductos().map(dato => (
						<div key={dato.id}>
							<Producto name={dato.name} costo={dato.cost_und} imagen={dato.imagen_URL} grupo={dato.grupo}/>
							<br />
						</div>
					))}

				</div>
			</div>
			&nbsp;
			{/* <div id="pieDePagina">
				<button className='btn btn-primary' 
				onClick={prevPage}> 
					anteriores
				</button>
				&nbsp;
				<button className='btn btn-primary' 
				onClick={netxPage}> 
					siguientes
				</button>
			</div> */}
			</>
    )
}

export default Productos