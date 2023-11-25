export interface Game {
    id: string;
    nombre: string;
    autor: string;
    descripcion: string;
    genero: string[];
    link: string;
  }
  
export interface GameCardProps extends Game {
  imageUrl:string
} 

export type GameCardDetails = Omit<Game,'link'>