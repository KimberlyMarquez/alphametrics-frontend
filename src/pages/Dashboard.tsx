import LineGraduatesChart from "../components/LineGraduatesChart";
import PieGenderChart from "../components/PieGenderChart";
import "./Dashboard.css";


export default function Dashboard() {
    return (
        <div className="container-fluid dashboard-container vh-100 gx-0 overflow-auto">
            <div className="row">
                <div className="col-lg-3 d-flex flex-column gap-3 mt-4">
                    <div className="card flex-fill shadow" style={{ backgroundColor: '#A8ADE8'}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" style={{color: '#4D528A'}}>
                            <h5 className="mb-2">Población</h5>
                            <div className="d-flex justify-content-center gap-2">
                                <p className="mb-0 text-white">Edad:</p>
                                <p className="mb-0 text-white">25</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-fill" style={{ backgroundColor: '#95CBF8'}}>
                        <div className="card-body d-lg-flex justify-content-lg-center align-items-lg-center text-center" style={{color: '#486883'}}>
                            <div>
                                <h5>Zona</h5>
                                <div style={{color:"#FFFFFF"}}>
                                    <p>Kino, Sonora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9 mt-4">
                    <div className="card shadow">
                    <div className="card-body">
                        <LineGraduatesChart />
                    </div>
                    </div>
                </div>
            </div>
    
            {/* SECOND ROW*/}

            <div className="row d-lg-flex">
                <div className="col-lg-3 mt-4">
                    <div className="card shadow h-100" style={{ backgroundColor: '#49D49D', color:'#FFFFFF'}}>
                        <div className="card-body d-lg-flex justify-content-lg-center align-items-lg-center text-center">
                            <h5 id="Alerta">BAJO</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="card shadow h-100">
                        <div className="card-body d-lg-flex justify-content-lg-center align-items-lg-center text-center">
                            <div>
                                <h5>Total de Evaluados</h5>
                                <p>100</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4">
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <div>
                                <PieGenderChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  