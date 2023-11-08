import React from "react";
import { Card } from "antd";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Estimated Daily Impression", value: 12000, color: "#FF8313" },
  { name: "Estimated Daily Clicks", value: 8000, color: "#1690FF" },
  { name: "Others", value: 10000, color: "#FFE9C7" },
];

const DoughnutChart = () => {
  return (
    <Card className="w-1/3 mt-8 ml-5 p-8 border-[1px] border-[#DAE6FF] rounded-[10px]">
      <div className="text-[14px] font-bold text-[#000000]">Estimated Results</div>
      <hr className="w-full border-[1px] border-[#EAEAEA] mt-3" />

      <div className="text-[12px] font-small text-[#000000] mt-4">
        Providing some estimate results based on your campaign settings
      </div>

      <div className="flex items-center justify-center">
        <div className=" relative" style={{ marginLeft: "3rem" }}>
          <div className="absolute mt-32 ml-20 text-center">
            <div className="text-[14px] font-medium text-[#000000] ">Estimated Daily Reach</div>
            <div className="text-[36px] font-bold text-[#000000]">30,000</div>
          </div>

          <PieChart width={350} height={350}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              startAngle={90}
              endAngle={450}
              innerRadius={100}
              outerRadius={150}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex text-xs">
          <div className="flex">
            <div style={{ background: '#FF8313', width: '4px', height: '61px', marginLeft: '-20px' }}></div>
            <div className="flex-row">
              <div className="ml-1">Estimated Daily Impressions</div>
              <div className="mt-5" style={{fontWeight:"800", fontSize:"30px"}}>12000</div>
            </div>
          </div>
          
          <div className="flex">
            <div style={{ background: '#1690FF', width: '4px', height: '61px', marginLeft: '24px' }}></div>
            <div className="flex-row">
              <div className="ml-1">Estimated Daily Clicks</div>
              <div className="mt-5" style={{fontWeight:"800", fontSize:"30px"}}>8000</div>
            </div>
          </div>
        </div>

        <div className="flex text-xs mt-5">
          <div className="flex">
            <div style={{ background: '#FFE9C7', width: '4px', height: '61px', marginLeft: '-20px' }}></div>
            <div className="flex-row">
              <div className="ml-1">Others</div>
              <div className="mt-5" style={{fontWeight:"800", fontSize:"30px"}}>10000</div>
            </div>
          </div>
        </div>
      </div>

    </Card>
  );
};

export default DoughnutChart;
