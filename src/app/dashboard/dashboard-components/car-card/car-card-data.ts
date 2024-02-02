export interface carcard {
    modelo: string,
    marca: string,
    color: string,
    localidad: string,
    image: string,
    precio: string
}

export const carcards: carcard[] = [

    {
        modelo: 'Citroën C3',
        marca: 'Citroën',
        color: 'Azul',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/citroen-c3.jpeg',
        precio: '20€/día'
    },
    {
        modelo: 'Porsche Cayenne',
        marca: 'Porsche',
        color: 'Azul',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/porsche-cayenne.webp',
        precio: '35€/día'
    },
    {
        modelo: 'Fiat 600',
        marca: 'Fiat',
        color: 'Rojo',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/fiat-600.jpg',
        precio: '15€/día'
    },
    {
        modelo: 'Toyota Supra',
        marca: 'Toyota',
        color: 'Rojo',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/toyota-supra-2jz.jpeg',
        precio: '30€/día'
    }


] 