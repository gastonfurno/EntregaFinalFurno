import { useEffect, useState } from "react";
import {pedirDatos} from "../Datos/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const [titulo, setTitulo] = useState ("SmartPhones");
    const marca = useParams().marca;

    useEffect(() => {
        pedirDatos()
        .then ((res) => {
            if (marca){
                setProductos(res.filter((prod) => prod.marca === marca));
                setTitulo(marca);
            }else {
            setProductos(res);
            setTitulo("SmartPhones")
            }

        }) 
    
    },[marca])
    
    return (
        
        <ItemList productos={productos} titulo={titulo}/>
    
    )
}
export default ItemListContainer