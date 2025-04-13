// src/components/PieGenderChart.tsx
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
  
const data = [
    { name: "Mujeres", value: 60 },
    { name: "Hombres", value: 40 },
];
  
const COLORS = ["#A8ADE8", "#95CBF8"];
  
export default function PieGenderChart() {
    return (
        <div className="card-body">
            <h5 className="mb-4 text-center">Distribución de Graduados por Género</h5>
    
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <div style={{ width: "100%", maxWidth: 400, height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={45}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
        
                <div className="mt-4 mt-lg-0 ms-lg-5">
                    <table className="text-center align-middle">
                        <thead>
                            <tr>
                            <th></th>
                            <th  className="ps-2 pe-2">TOTAL</th>
                            <th>PORCENTAJE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{color:"#A8ADE8"}}>
                                <td className="fw-bold">Mujeres</td>
                                <td className="ps-2 pe-2">60</td>
                                <td>60%</td>
                            </tr>
                            <tr style={{color:"#95CBF8"}}>
                                <td className="fw-bold">Hombres</td>
                                <td className="ps-2 pe-2">40</td>
                                <td>40%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
  