import { acreageRanges, cities, districts, priceRanges } from "@/constants";
import { UseFiltersProps } from "@/hooks/useFilters";
import { useMemo } from "react";

interface FilterFormProps {
  handleChange: (key: keyof UseFiltersProps, value: string) => void;
  handleSearch: () => void;
  filters: UseFiltersProps;
}

function FilterForm({ filters, handleChange, handleSearch }: FilterFormProps) {
  const districtFilter = useMemo(
    () =>
      Object.values(districts).filter(
        (district) => district.parent_code === filters.city,
      ),
    [filters.city],
  );

  return (
    <div className="mb-6 space-y-4 rounded-lg border bg-white p-4 shadow-md">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tỉnh thành
          </label>

          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
            onChange={(e) => handleChange("city", e.target.value)}
            value={filters.city}
          >
            <option value="" disabled>
              --- Tỉnh thành ---
            </option>

            {Object.values(cities).map((city) => {
              return (
                <option key={city.code} value={city.code}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quận huyện
          </label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
            onChange={(e) => handleChange("district", e.target.value)}
            value={filters.district}
          >
            <option value="" disabled>
              --- Quận/huyện ---
            </option>

            {districtFilter.map((province) => {
              return (
                <option key={province.code} value={province.code}>
                  {province.name_with_type}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Khoảng giá
          </label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
            onChange={(e) => handleChange("price", e.target.value)}
            value={filters.price}
          >
            <option value="" disabled>
              --- Chọn mức giá ---
            </option>

            {priceRanges.map((price) => {
              return (
                <option key={price.value} value={price.value}>
                  {price.label}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Diện tích
          </label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
            onChange={(e) => handleChange("acreage", e.target.value)}
            value={filters.acreage}
          >
            <option value="" disabled>
              --- Chọn diện tích ---
            </option>

            {acreageRanges.map((acreage) => {
              return (
                <option key={acreage.value} value={acreage.value}>
                  {acreage.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex items-end">
        <button
          type="button"
          className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}

export default FilterForm;
