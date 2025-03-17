export interface Book{
    data: {
        id: number;
        Year: number;
        Title: string;
        handle: string;
        Publisher: string;
        ISBN: string;
        Pages: number;
        Notes: string[];
        created_at: string;
        villains: {
            name: string;
            url: string;
    }[];
    }
}