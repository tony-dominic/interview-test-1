import ResultsJSON from "../mock-data/data.json";
import DistrictsJSON from "../mock-data/quan_huyen.json";
import CitiesJSON from "../mock-data/tinh_tp.json";

import { CityData } from "@/types/city";
import { DistrictData } from "@/types/district";
import { Result } from "@/types/result";

export const resultsData = ResultsJSON as Result[];
export const cities = CitiesJSON as CityData;
export const districts = DistrictsJSON as DistrictData;

export const priceRanges = [
  { label: "Dưới 1 triệu", value: "0-1000000" },
  { label: "1 triệu - 2 triệu", value: "1000000-2000000" },
  { label: "2 triệu - 3 triệu", value: "2000000-3000000" },
  { label: "3 triệu - 5 triệu", value: "3000000-5000000" },
  { label: "5 triệu - 7 triệu", value: "5000000-7000000" },
  { label: "7 triệu - 10 triệu", value: "7000000-10000000" },
  { label: "Trên 10 triệu", value: "10000000-" },
];

export const acreageRanges = [
  { label: "Dưới 20 m²", value: "0-20" },
  { label: "20 - 30 m²", value: "20-30" },
  { label: "30 - 50 m²", value: "30-50" },
  { label: "50 - 60 m²", value: "50-60" },
  { label: "60 - 70 m²", value: "60-70" },
  { label: "70 - 100 m²", value: "70-100" },
  { label: "Trên 100 m²", value: "100-" },
];
