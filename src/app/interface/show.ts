export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: [];
    runtime: number;
    image:{
        original: string;
    }
}
