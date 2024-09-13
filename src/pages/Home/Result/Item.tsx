import { Result } from "@/types/result";
import { findDistrictByCode, formatToVND } from "@/utils";

function Item({
  title,
  area,
  content,
  district,
  price,
  thumbnail,
}: Partial<Result>) {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="h-32 w-48 rounded-lg object-cover"
        />
      </div>
      <div className="mt-4 flex-1 sm:ml-4 sm:mt-0">
        <h3 className="text-lg font-semibold text-red-600">{title}</h3>
        <p className="text-base font-medium text-green-600">
          {formatToVND(price ?? 0)}/tháng
        </p>

        <div className="flex items-center gap-4">
          <p className="text-gray-600">
            Diện tích: <span className="font-bold">{area}m²</span>
          </p>

          <p className="text-gray-600">
            Khu vực:{" "}
            <span className="font-bold">
              {findDistrictByCode(district ?? "")}
            </span>
          </p>
        </div>
        <p className="mt-2 text-gray-800">{content}</p>
      </div>
    </>
  );
}

export default Item;
