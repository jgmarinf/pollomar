import React from 'react'
import Producto from './Producto'
import '../App.css';



const datos= [
	{id:1	,name:"	Arepa de chocolo x5 - Q rico                 ",cost_und:"$ 2.700	",grupo:"	AREPAS	        ",imagen_URL:	},	
	{id:2	,name:"	Arepa - neirana	                             ",cost_und:"$ 2.600	",grupo:"	AREPAS	        ",imagen_URL:	},	
	{id:3	,name:"	Arepa pequeña - buena arepa	                 ",cost_und:"$ 1.100	",grupo:"	AREPAS	        ",imagen_URL:	},	
	{id:4	,name:"	Arepa grande - buena arepa	                 ",cost_und:"$ 1.300	",grupo:"	AREPAS	        ",imagen_URL:	},	
	{id:5	,name:"	Yogurt alpina x150 gr	                     ",cost_und:"$ 1.900	",grupo:"	YOGURT	        ",imagen_URL:	},	
	{id:6	,name:"	Yogurt normandy x180 gr	                     ",cost_und:"$ 2.200	",grupo:"	YOGURT	        ",imagen_URL:	},	
	{id:7	,name:"	Kumis alpina x150 gr	                     ",cost_und:"$ 2.200	",grupo:"	YOGURT	        ",imagen_URL:	},	
	{id:8	,name:"	Bon Yurt	                                 ",cost_und:"$ 3.000	",grupo:"	YOGURT	        ",imagen_URL:	},	
	{id:9	,name:"	Yox x100 gr	                                 ",cost_und:"$ 1.900	",grupo:"	YOGURT	        ",imagen_URL:	},	
	{id:10	,name:"	Pan bimbo grande	                         ",cost_und:"$ 4.800	",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:11	,name:"	Tostada bimbo mantequilla	                 ",cost_und:"$ 3.200	",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:12	,name:"	Tostada bimbo integral	                     ",cost_und:"$ 3.700	",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:13	,name:"	Chocoso bimbo	                             ",cost_und:"$ 1.200	",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:14	,name:"	Panque bimbo	                             ",cost_und:"$ 1.100	",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:15	,name:"	Browni Mini	                                 ",cost_und:"$ 600	    ",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:16	,name:"	Cocada	                                     ",cost_und:"$ 450	    ",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:17	,name:"	Panelita	                                 ",cost_und:"$ 350	    ",grupo:"	PANADERIA	    ",imagen_URL:	},	
	{id:18	,name:"	Crema de leche x100 gramos	                 ",cost_und:"$ 1.400	",grupo:"	CREMA DE LECHE	",imagen_URL:	},	
	{id:19	,name:"	Crema de leche x200 gramos	                 ",cost_und:"$ 2.400	",grupo:"	CREMA DE LECHE	",imagen_URL:	},	
	{id:20	,name:"	Crema de leche x1000 gramos	                 ",cost_und:"$ 12.500	",grupo:"	CREMA DE LECHE	",imagen_URL:	},	
	{id:21	,name:"	Papa a la francesa x2.5 kg	                 ",cost_und:"$ 16.000	",grupo:"	CHIPS	        ",imagen_URL:	},	
	{id:22	,name:"	Papa a la francesa x500 gr	                 ",cost_und:"$ 3.800	",grupo:"	CHIPS	        ",imagen_URL:	},	
	{id:23	,name:"	Maíz tierno	                                 ",cost_und:"$ 9.500	",grupo:"	CHIPS	        ",imagen_URL:	},	
	{id:24	,name:"	Maíz arveja, maíz, zanahoria x500 gr	     ",cost_und:"$ 4.800	",grupo:"	CHIPS	        ",imagen_URL:	},	
	{id:25	,name:"	Maíz arveja, maíz, zanahoria x1000 gr	     ",cost_und:"$ 9.000	",grupo:"	CHIPS	        ",imagen_URL:	},	
	{id:26	,name:"	Yuca x 1000 gr	                             ",cost_und:"$ 5.400	",grupo:"	CHIPS	        ",imagen_URL:	},	
	{id:27	,name:"	Arroz Diana	                                 ",cost_und:"$ 1.400	",grupo:"	GRANOS	        ",imagen_URL:	},	
	{id:28	,name:"	Arroz Carolina	                             ",cost_und:"$ 1.400	",grupo:"	GRANOS	        ",imagen_URL:	},	
	{id:29	,name:"	Lenteja	                                     ",cost_und:"$ 2.300	",grupo:"	GRANOS	        ",imagen_URL:	},	
	{id:30	,name:"	Frijol	                                     ",cost_und:"$ 3.000	",grupo:"	GRANOS	        ",imagen_URL:	},	
	{id:31	,name:"	Camarón titi 200/300 - kg	                 ",cost_und:"$ 23.000	",grupo:"	MARISCOS	    ",imagen_URL:	},	
	{id:32	,name:"	Camarón tigre 51/60 - kg	                 ",cost_und:"$ 34.000	",grupo:"	MARISCOS	    ",imagen_URL:	},	
	{id:33	,name:"	Pechuga blanca refrigerada - kg 	         ",cost_und:"$ 12.400	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:34	,name:"	Pechuga blanca congelada - kg       	     ",cost_und:"$ 12.400	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:35	,name:"	Pechuga campesina - kg 	                     ",cost_und:"$ 13.000	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:36	,name:"	Muslo campesino - kg 	                     ",cost_und:"$ 7.000	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:37	,name:"	Contramuslo campesino - kg 	                 ",cost_und:"$ 6.800	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:38	,name:"	Filete de pechuga - kg 	                     ",cost_und:"$ 19.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:39	,name:"	Pernil - kg 	                             ",cost_und:"$ 6.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:40	,name:"	Ala campesina - kg 	                         ",cost_und:"$ 8.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:41	,name:"	Ala sin costillar adobada  x14 	             ",cost_und:"$ 14.000	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:42	,name:"	Ala sin costillar - kg 	                     ",cost_und:"$ 11.200	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:43	,name:"	Recorte con pechuga - bandeja       	     ",cost_und:"$- 	    ",grupo:"	POLLO MACPOLLO 	",imagen_URL:   },	
	{id:44	,name:"	Víscera corriente - bandeja 	             ",cost_und:"$ 1.400	",grupo:"	POLLO MACPOLLO 	",imagen_URL:   },	
	{id:45	,name:"	Hígado - bandeja 	                         ",cost_und:"$ 3.200	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:46	,name:"	Molleja - bandeja 	                         ",cost_und:"$ 4.500	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:47	,name:"	Molipollo - unidad 	                         ",cost_und:"$ 3.100	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:48	,name:"	Pollo entero - kg	                         ",cost_und:"$ 9.300	",grupo:"	POLLO MACPOLLO 	",imagen_URL:	},	
	{id:49	,name:"	Mojarra 230 gr hasta 550 gr - kg 	         ",cost_und:"$ 15.000	",grupo:"	PESCADO 	    ",imagen_URL:	},	
	{id:50	,name:"	Trucha 250 gr hasta 450 gr - kg 	         ",cost_und:"$ 24.000	",grupo:"	PESCADO 	    ",imagen_URL:   },	
	{id:51	,name:"	Filete de pescado  x 4 - x 5 - x 6 - paquete ",cost_und:"$ 13.000	",grupo:"	PESCADO 	    ",imagen_URL:	},	
	{id:52	,name:"	Bagre porcionado - kg 	                     ",cost_und:"$ 11.000	",grupo:"	PESCADO 	    ",imagen_URL:   },	
	{id:53	,name:"	Salmón - kg 	                             ",cost_und:"$ 45.000	",grupo:"	PESCADO 	    ",imagen_URL:	},	
	{id:54	,name:"	Recorte de pescado - kg	                     ",cost_und:"$ 4.500	",grupo:"	PESCADO 	    ",imagen_URL:   },	
	{id:55	,name:"	Queso cuajada - kg 	                         ",cost_und:"$ 10.300	",grupo:"	QUESO 	        ",imagen_URL:	},	
	{id:56	,name:"	Queso campesino - lb 	                     ",cost_und:"$ 5.500	",grupo:"	QUESO 	        ",imagen_URL:	},	
	{id:57	,name:"	Queso doble crema entero - bloque 	         ",cost_und:"$ 38.500	",grupo:"	QUESO 	        ",imagen_URL:	},	
	{id:58	,name:"	Queso doble crema tajado - bloque 	         ",cost_und:"$ 38.500	",grupo:"	QUESO 	        ",imagen_URL:	},	
	{id:59	,name:"	Queso doble crema tajado - lb 	             ",cost_und:"$ 7.000	",grupo:"	QUESO 	        ",imagen_URL:	},	
	{id:60	,name:"	Queso doble crema entero - kg 	             ",cost_und:"$ 16.000	",grupo:"	QUESO 	        ",imagen_URL:	},
	{id:61	,name:"	Cubeta huevo AA	                             ",cost_und:"$ 13.000	",grupo:"	HUEVO 	        ",imagen_URL:	},	
	{id:62	,name:"	Chorizo santarrosano - x5 unidades 	         ",cost_und:"$ 7.000	",grupo:"	CARNES FRIAS 	",imagen_URL:   },	
	{id:63	,name:"	Hamburguesa de carne - 10 unidades 	         ",cost_und:"$ 6.500	",grupo:"	CARNES FRIAS 	",imagen_URL:   },	
	{id:64	,name:"	Salchichón cervecero ahumado 	             ",cost_und:"$ 5.800	",grupo:"	CARNES FRIAS 	",imagen_URL:   },	
	{id:65	,name:"	Salchichón cerveroni - ZENU 	             ",cost_und:"$ 19.800	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:66	,name:"	Trompa ahumada 	                             ",cost_und:"$ 5.000	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:67	,name:"	Ranchera - x5 unidades - ZENU 	             ",cost_und:"$ 4.000	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:68	,name:"	Jamón x 400 gr - RICA 	                     ",cost_und:"$ 7.700	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:69	,name:"	Jamón Calima 	                             ",cost_und:"$ 5.400	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:70	,name:"	Salchicha manguera - unidad 	             ",cost_und:"$ 1.200	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:71	,name:"	Albondiga x10  unidades 	                 ",cost_und:"$ 6.800	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:72	,name:"	Tocineta x 250 gr 	                         ",cost_und:"$ 6.800	",grupo:"	CARNES FRIAS 	",imagen_URL:   },	
	{id:73	,name:"	Tocineta 1 kilo 	                         ",cost_und:"$ 18.000	",grupo:"	CARNES FRIAS 	",imagen_URL:	},	
	{id:74	,name:"	Leche alquería larga vida 	                 ",cost_und:"$ 3.400	",grupo:"	LECHE 	        ",imagen_URL:	},	
	{id:75	,name:"	Leche alquería deslactosada larga vida 	     ",cost_und:"$ 3.500	",grupo:"	LECHE 	        ",imagen_URL:	},	
	{id:76	,name:"	Leche puro campo	                         ",cost_und:"$ 2.100	",grupo:"	LECHE 	        ",imagen_URL:	}	
]

function Productos () {
    return (
        <div className="container" id= "container">            
            <div className="row">
                {
                    datos.map(dato =>(
                        <div key={dato.id}>
                            <Producto name={dato.name} costo={dato.cost_und} imagenSource={dato.imagen_URL}/>
                        </div>
                    ))
                }
            </div>      
        </div>
    )
}

export default Productos
