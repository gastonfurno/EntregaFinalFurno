import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../Firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const [titulo, setTitulo] = useState ("SmartPhones");
    const marca = useParams().marca;

    useEffect(() => {

        const productosRef = collection (db, "productos");
        const q = marca ? query(productosRef, where ("marca", "==", marca)) : productosRef;
        
        
        getDocs(q)
        .then((resp)=> {
            setProductos(
            resp.docs.map((doc) =>{
                return{...doc.data(), id: doc.id}
            })
            )
        })
        
    },[marca])
    
    return (
        
        <ItemList productos={productos} titulo={titulo}/>
    
    )
}
export default ItemListContainer