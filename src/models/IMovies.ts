import {IMovie} from "@/models/IMovie";

export interface IMovies {
    page: number,
    results: IMovie[],
    total_pages: number,
}