import LIST_DATA from '../data/LIST_DATA.json'

export const pedirDatos = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(LIST_DATA)
        }, 2500)
    })
}