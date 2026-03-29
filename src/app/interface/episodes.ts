export interface Episodes {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    runtime: number;
    image: {
        original: string;
    }
    summary: string;
}
