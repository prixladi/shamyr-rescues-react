export type PlacePreviewModel = {
  id: number;
  name: string;
  shortDescription: string;
  countryCode: string;
  websiteUrl?: string;
};

export type PlaceDetailModel = PlacePreviewModel & {
  address?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  imageUrl?: string;
  quote?: string;
}

export type PlacesModel = {
  count: number;
  places: PlacePreviewModel[];
};
