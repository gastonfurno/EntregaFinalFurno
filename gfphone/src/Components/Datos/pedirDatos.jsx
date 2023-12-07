import Data from "../Json/Data.json"

export const pedirDatos = () => {

    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(Data);
        }, 1000)
    })
}

export const pedirItemPorId = (id) => {
return new Promise((resolve, reject) => {

    const item= Data.find((el) => el.id === id);
    if (item){
        resolve(item);
    } else {
        reject({
            error:"No se encontro el producto seleccionado"
        }
        )
    }
})
    
}