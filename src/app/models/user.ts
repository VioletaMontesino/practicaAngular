export class User {
    $key: string;
    nombre: string;
    apellidos: string;
    edad: string;
    dni: string;
    cumpleanos: Date;
    colorFavorito: string;
    sexo: Sexo;
}

export interface Sexo {
    id: number;
    name: string;
}
