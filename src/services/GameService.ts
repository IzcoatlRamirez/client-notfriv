import axios from './axios';
import { AxiosResponse } from 'axios';

export const getGames = async(): Promise<AxiosResponse> => await axios.get('/api/juegos');
export const getGenres = async(): Promise<AxiosResponse> => await axios.get('/Generos.php');


