export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type Property = {
  id: string;
  name: string;
  location: string;
  price_eth: number;
  price_dirham: number;
  token_standard: string;
  type: string;
  lat: number;
  lng: number;
};

export type PropertyCoordinate = {
  id: number;
  name: string;
  lat: number;
  lng: number;
}