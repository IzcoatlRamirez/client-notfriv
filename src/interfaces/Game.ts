export interface Game {
    id: string;
    nombre: string;
    autor: string;
    descripcion: string;
    genero: string[];
    link: string;
    imagen: string;
  }
  
export interface GameCardProps extends Game {
  imagen:string
} 

export type GameCardDetails = Omit<Game,'link'>