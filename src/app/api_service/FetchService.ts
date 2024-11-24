import {IMovie} from "@/app/models/IMovie";
import {IGenres} from "@/app/models/IGenres";

const API_KEY = '1742dfd1e9ca6ce0c3c093f7bf72edc4';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchAPI = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', API_KEY);
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

    const response = await fetch(url.toString());
    const data: T = await response.json();  // Типізуємо відповідь
    return data;
};



// Запит на популярні фільми
export const getPopularMovies = async (page: number): Promise<{ results: IMovie[]; total_pages: number}> => {
    return fetchAPI<{ results: IMovie[]; total_pages: number }>('/discover/movie', {
        sort_by: 'popularity.desc',
        page: String(page),
    });
};



// Запит на конкретний фільм
export const getMovie = async (id: string): Promise<IMovie> => {
    return fetchAPI<IMovie>(`/movie/${id}`, {});
};

export const searchMovies = async (query: string, page = 1): Promise<{ results: IMovie[] }> => {
    return fetchAPI<{ results: IMovie[] }>('/search/movie', { query, page: String(page) });
};

export const getGenres = async (): Promise<IGenres[]> => {
    const response = await fetchAPI<{ genres: IGenres[] }>('/genre/movie/list', {});
    return response.genres;
};


