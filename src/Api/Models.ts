export type PlaceModel = {
    id: number;
    name: string;
    description: string;
    imageUrl?: string,
    quote?: string,
}


export type PlacesModel = {
    count: number;
    places: PlaceModel[];
}