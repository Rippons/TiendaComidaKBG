/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Label } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { customAxios } from "@/axios/Axios";


const ChartRadar = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  
  const countProductsByCategory = (products: Product[]): ChartData[] => {
    const categoryCount: { [key: string]: number } = {};
    products.forEach((product) => {
      if (product.categoria) {
        categoryCount[product.categoria] =
          (categoryCount[product.categoria] || 0) + 1;
      }
    });

    return Object.keys(categoryCount).map((categoria) => ({
      name: categoria,
      count: categoryCount[categoria],
    }));
  };

  const getDataProducts = async () => {
    try {
      const request = await customAxios.get("products", {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const products: Product[] = request.data.data;
      
      if (request.status === 200) {
        const processedData = countProductsByCategory(products);
        setChartData(processedData);
        setTotalItems(products.length);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const chartConfig = {
    count: {
      label: "Count",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <div className="px-2 bg-white">
      <div
        style={{ width: "100%", height: 400 }}
        className="flex items-center flex-col shadow border rounded"
      >
        <h2 className="font-semibold leading-none tracking-tight py-4">
          Productos categorizados
        </h2>
        <h3>
          Total de productos registrados: {totalItems}
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="name"
                stroke="0"
                fill="#F17E92"
              >
                <Label position="outside" fill="#000" />
              </Pie>
            </PieChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartRadar;
