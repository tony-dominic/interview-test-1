import { Result } from "@/types/result";
import Item from "./Item";

interface ResultsProps {
  results: Result[];
}

function Results({ results }: ResultsProps) {
  return (
    <>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((item, index) => (
            <li
              key={index}
              className="flex flex-col rounded-lg border bg-white p-4 shadow-md sm:flex-row"
            >
              <Item key={index} {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Không tìm thấy kết quả.</p>
      )}
    </>
  );
}

export default Results;
