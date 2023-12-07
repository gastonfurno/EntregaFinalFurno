import Item from "../Item/Item"

const ItemList = ({productos, titulo}) => {
    return (
        
        <><div className="tituloProducto"><h2> {titulo}</h2> </div><div className="conteiner">
            {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div></>
    )
}
export default ItemList