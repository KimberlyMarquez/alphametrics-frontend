import { useEffect, useState } from "react";
import { getAllZones, getPopulations } from "../api/PersonAPI";
import { Zone, Population } from "my-types";

export default function HeaderList() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [populations, setPopulations] = useState<Population[]>([]);
  const [selectedZone, setSelectedZone] = useState<number | string>("");

  useEffect(() => {
    getAllZones().then((data: Zone[]) => {
      setZones(data);
      const defaultZone = data[0].id;
      setSelectedZone(defaultZone);
    });
  }, []);

  useEffect(() => {
    if (selectedZone != "") {
      getPopulations(Number(selectedZone)).then((populationsData) => {
        setPopulations(populationsData);
      });
    }
  }, [selectedZone]);

  const handleZoneChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const zoneId = event.target.value;
    setSelectedZone(zoneId);
    console.log("Zona seleccionada:", zoneId);

    if (zoneId) {
      const populationsData = await getPopulations(Number(zoneId));
      console.log(populationsData);
      setPopulations(populationsData);
    } else {
      setPopulations([]); // Si no se selecciona zona, no mostrar poblaciones
    }
  };

  return (
    <>
      <div id="top" className="mt-lg-5 offset-1 me-5">
        <div id="title" className="col-lg-9">
          <h1
            style={{ fontSize: "60px", color: "#4E5283", fontWeight: "bold" }}
          >
            EVALUADOS
          </h1>
        </div>
        <hr />
        <div
          id="select-zona"
          className="col-lg-3 w-auto row d-flex align-items-center mt-4"
        >
          <button id="add-btn" className="btn col-2 mx-3">
            Nueva Persona
          </button>
          <select
            name="zone"
            id="zone"
            className="col-2 offset-4"
            style={{ height: "30px" }}
            value={selectedZone}
            onChange={handleZoneChange}
          >
            {zones.map((zone, index) => (
              <option
                key={index}
                value={zone.id}
              >{`${zone.name}, ${zone.state}`}</option>
            ))}
          </select>
          <select
            name="population"
            id="population"
            className="col-2 offset-1"
            style={{ height: "30px" }}
          >
            {populations.map((population, index) => (
              <option
                key={index}
                value={population.id}
              >{`Zona: ${population.id}, Edad: ${population.age} anios`}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
