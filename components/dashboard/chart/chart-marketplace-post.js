import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartMarketPlacePost() {
  const data = [
    {
      day: "1",
      qty: 5000,
    },
    {
      day: "2",
      qty: 3000,
    },
    {
      day: "3",
      qty: 2000,
    },
    {
      day: "4",
      qty: 4780,
    },
    {
      day: "5",
      qty: 1890,
    },
    {
      day: "6",
      qty: 3390,
    },
    {
      day: "7",
      qty: 5490,
    },
  ];

  return (
    <div className="flex-1 h-[16%] w-full md:w-[22.5%] 2xl:w-[22.5%] border border-neutral-20 rounded-2xl">
      <div className="w-full h-full pt-5 pl-4">
        <p className="text-sm font-semibold text-[#1C1C1C]">
          Marketplace Post
        </p>
        <h1 className="text-xl font-bold text-neutral-80">35 Akun</h1>
      </div>
      <div className="w-full h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7EAAFF" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tick={false}
              tickLine={false}
              axisLine={false}
              hide
            />
            <YAxis tick={false} tickLine={false} axisLine={false} hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="qty"
              stroke="#0C3E9F"
              fillOpacity={1}
              fill="url(#colorBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
