import { districts } from "@/constants";

export const formatToVND = (amount: number) => {
  if (isNaN(amount)) {
    return "Invalid amount";
  }

  const number = Number(amount);

  const thresholds = [
    { limit: 1_000_000_000, suffix: "tỷ" },
    { limit: 1_000_000, suffix: "triệu" },
    { limit: 1_000, suffix: "ngàn" },
    { limit: 1, suffix: "" },
  ];

  for (const { limit, suffix } of thresholds) {
    if (number >= limit) {
      const value = (number / limit).toFixed(1);
      return `${value} ${suffix}`;
    }
  }

  return number.toFixed(1);
};

export const findDistrictByCode = (code: string) => {
  return districts[code]?.path_with_type;
};
