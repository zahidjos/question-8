
import './App.css';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

function App() {
  const data=[{
    date:"2021-07-11",
    sale:"53"
  },
  {
    date:"2021-07-12",
    sale:"42"
  },
  {
    date:"2021-07-13",
    sale:"88"
  },
  {
    date:"2021-07-14",
    sale:"14"
  },
  {
    date:"2021-07-15",
    sale:"77"
  },
  {
    date:"2021-07-16",
    sale:"68"
  },
  {
    date:"2021-07-17",
    sale:"63"
  }
  ]
  return (
    <div className="App">
      <div>
      <BarChart
          width={1000}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sale" fill="#8884d8" />
          
        </BarChart>
      </div>
        
    </div>
  );
}

export default App;
