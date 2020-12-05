export interface User {
    id: number,
    name: string,
    username: string,
    company: Company,
    nAlbums?: number
}

export interface Company {
    name: string
}

export interface Album {
    userId: number,
    id: number,
    title: string,
    thumbnailUrl?: string
}

export interface Photo {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}