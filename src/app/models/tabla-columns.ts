import { KeyboardResponse } from "./keyboard";
import { MouseResponse } from "./mouse";

export interface Accion<T = any>{
    accion: string; // editar o eliminar
    fila?: T; // registrar 
}

export const getEntityPropiedades = (entidad: string): Array<any> => {
    let resultados: any = [];
    let clase: any; 

    switch (entidad) {
        case 'keyboard':
            clase = new KeyboardResponse(); break;
        case 'mouse':
            clase = new MouseResponse(); break;
    }

    if (clase) {
        resultados = Object.keys(clase);
    }
    return resultados
}