import { FC } from "react";

import FilterForm from "./FilterForm";
import Results from "./Result";
import { useFilters } from "@/hooks/useFilters";

export const Home: FC = () => {
  const { results, filters, handleChange, handleSearch } = useFilters();

  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <FilterForm
        filters={filters}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <Results results={results} />
    </div>
  );
};
