import { resultsData } from "@/constants";
import { Result } from "@/types/result";
import { useState } from "react";

export interface UseFiltersProps {
  city: string;
  district: string;
  price: string;
  acreage: string;
}

export const useFilters = () => {
  const [filters, setFilters] = useState<UseFiltersProps>({
    city: "",
    district: "",
    price: "",
    acreage: "",
  });

  const [results, setResults] = useState<Result[]>(resultsData);

  const handleChange = (key: keyof UseFiltersProps, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
      ...(key === "city" && {
        district: "",
        price: "",
        acreage: "",
      }),
      ...(key === "district" && {
        price: "",
        acreage: "",
      }),
    }));
  };

  const handleRangeFilter = (range: string, value: number) => {
    const [min, max] = range.split("-").map(Number);
    if (max) {
      return value >= min && value <= max;
    }
    return value >= min;
  };

  const applyFilters = (result: Result) => {
    const { city, district, price, acreage } = filters;

    if (city && result.city !== city) return false;
    if (district && result.district !== district) return false;
    if (price && !handleRangeFilter(price, result.price)) return false;
    if (acreage && !handleRangeFilter(acreage, result.area)) return false;

    return true;
  };

  const handleSearch = () => {
    const filteredResults = resultsData.filter(applyFilters);
    setResults(filteredResults);
  };

  return {
    filters,
    results,
    handleChange,
    handleSearch,
  };
};
