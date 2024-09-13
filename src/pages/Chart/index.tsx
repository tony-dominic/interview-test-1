import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useEffect, useState } from "react";

export function Chart() {
  const [chartOptions, setChartOptions] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://demo-live-data.highcharts.com/aapl-ohlc.json",
      );
      const data = await response.json();

      setChartOptions({
        rangeSelector: {
          selected: 1,
        },

        title: {
          text: "Candlestick Chart",
        },

        series: [
          {
            type: "candlestick",
            name: "AAPL Stock Price",
            data: data,
            dataGrouping: {
              units: [
                [
                  "week", // unit name
                  [1], // allowed multiples
                ],
                ["month", [1, 2, 3, 4, 6]],
              ],
            },
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[80vw]">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
        />
      </div>
    </div>
  );
}
