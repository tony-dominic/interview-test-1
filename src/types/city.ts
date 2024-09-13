export interface City {
  name: string;
  type: string;
  slug: string;
  name_with_type: string;
  code: string;
}

export interface CityData {
  [key: string]: City;
}
