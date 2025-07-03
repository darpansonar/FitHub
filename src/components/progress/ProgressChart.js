import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function ProgressChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Line 
        data={data}
        options={{ responsive: true }}
      />
    </div>
  );
}