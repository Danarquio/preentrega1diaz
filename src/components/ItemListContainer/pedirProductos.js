import data from "../../data/productos.json";

export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
           resolve(data) 
        }, 100)
           })
}


export const pedirDetalle = (id) => {
    return new Promise ((resolve, reject) => {
const item= data.find ((el) => el.id === id)

if (item) {
    resolve (item)
} else{
    reject ({
        error: "No se encontro el producto"
    })
}
    })
}