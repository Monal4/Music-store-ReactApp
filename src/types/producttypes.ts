export interface product {
    id: string,
    code: string,
    description: string,
    price: string,
    tracks: [
        {
            id: string,
            trackNumber: string,
            title: string,
            sampleFilename: string
        },
        {
            id: string,
            trackNumber: string,
            title: string,
            sampleFilename: string
        }
    ]
}
