import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart(props) {
  const { title, data, grid, lineKey, xKey } = props;
  return (
    <div className="layout">
      <div className="layoutCard">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart data={data}>
            <Line type="monotone" dataKey={lineKey} stroke="#8884d8" />
            <XAxis dataKey={xKey} />
            {/* <YAxis /> */}
            <Tooltip />
            {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
