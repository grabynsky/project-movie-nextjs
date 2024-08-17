import {IGenre} from "@/models/IGenre";

export interface IGenres {
    page: number,
    results: IGenre[],
    total_pages: number,
}