import { useLoaderData } from "react-router-dom";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();

  return (
    <div className="inner-width mx-auto">
      <h1 className="mt-5 mb-10 text-center text-2xl font-semibold">
        Statistics
      </h1>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f6b727" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f6b727" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#f6b727"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <figure className="mt-5 text-center text-sm font-medium text-gray-500">
        Fig: Total number of quizzes.
      </figure>
    </div>
  );
};

export default Statistics;
