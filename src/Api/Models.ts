export type CreatePlaceModel = {
  name: string;
  shortDescription: string;
  countryCode: string;
  address?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  websiteUrl?: string;
  imageUrl?: string;
  quote?: string;
};

export type UpdatePlaceModel = {
  name: string;
  shortDescription: string;
  countryCode: string;
  address?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  websiteUrl?: string;
  imageUrl?: string;
  quote?: string;
};

export type PlacePreviewModel = {
  id: number;
  name: string;
  shortDescription: string;
  countryCode: string;
  websiteUrl?: string;
};

export type PlaceDetailModel = PlacePreviewModel & {
  userId: string;
  removed: boolean;
  createdAt: string;
  updatedAt: string;
  address?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  imageUrl?: string;
  quote?: string;
};

export type PlacesModel = {
  count: number;
  places: PlacePreviewModel[];
};
