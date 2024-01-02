export type locationItem = {
  id: string;
  title: string;
  location: {
    lat: number;
    lng: number;
    distance: number;
    unit: string;
  };
  image: string;
  description: string;
  rating: number;
  reviews: number;
  isFavorite: boolean;
  isPopular: boolean;
};

export type SliderItemType = {
  id: string;
  title: string;
  location: locationItem;
};

export type SliderItems = SliderItemType[];
