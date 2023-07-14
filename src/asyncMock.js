const products = [
    { id: '1', nombre: 'Bondiola Curada', precio: 3100, stock: 5000, minimo: 100, categoria: 'curados' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/bondiola.png'},
    { id: '2', nombre: 'Jamón Serrano', precio: 4200, stock: 2000, minimo: 100, categoria: 'curados' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/jamonserrano.png'},
    { id: '3', nombre: 'Salame', precio: 1990, stock: 8500, minimo: 200,categoria: 'embutido', imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/salame.png'},
    { id: '4', nombre: 'Charqui', precio: 1500, stock: 5500, minimo: 100, categoria: 'deshidratados' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/charqui.png' },
    { id: '5', nombre: 'Chorizo', precio: 4800, stock: 6500, minimo: 250,categoria: 'embutido' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/Chorizo.png' },
    { id: '6', nombre: 'Jamon Cocido', precio: 2500, stock: 6500, minimo: 250,categoria: 'embutido' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/jamon.png' },
    { id: '7', nombre: 'Salchicha', precio: 3500, stock: 6500, minimo: 250,categoria: 'embutido' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/salchichas1.png' },
    { id: '8', nombre: 'Mortadela', precio: 1900, stock: 6500, minimo: 100,categoria: 'embutido' , imagen: 'https://danarquio.github.io/Shop-Dracarnis/Imagenes/mortadela1.png' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}