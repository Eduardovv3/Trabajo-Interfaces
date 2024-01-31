export interface carcard {
    modelo: string,
    color: string,
    localidad: string,
    image: string,
    precio: string
}

export const carcards: carcard[] = [

    {
        modelo: 'Citroën C3',
        color: 'Azul pastel',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/citroen-c3.jpeg',
        precio: '20€/día'
    },
    {
        modelo: 'Porsche Cayenne',
        color: 'Azul marino',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/porsche-cayenne.webp',
        precio: '35€/día'
    },
    {
        modelo: 'Fiat 600',
        color: 'Rojo caoba',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/fiat-600.jpg',
        precio: '15€/día'
    },
    {
        modelo: 'Toyota Supra',
        color: 'Rojo carmesí',
        localidad: 'Valencia',
        image: '../../../../../assets/images/cars/toyota-supra-2jz.jpeg',
        precio: '30€/día'
    }


] 