import { useEffect, useState } from "react";
import { getAllZones, getPopulations } from "../api/PersonAPI";
import { Zone, Population } from "my-types";
import { Link } from "react-router-dom";

type Props = {
  setCurrPop: (id: number) => void;
  currPop: number;
};

export default function HeaderList({ setCurrPop, currPop }: Props) {
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
        const newPop =
          populations.find((pop) => pop.id === currPop) ?? populations[0];
        setCurrPop(newPop.id);
      });
    }
  }, [selectedZone, currPop, populations, setCurrPop]);

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
      setPopulations([]);
    }
  };

  return (
    <>
      <div id="top" className="mt-lg-5 me-5 mt-3">
        <div id="title" className="col-lg-9">
          <h1
            style={{ fontSize: "60px", color: "#4E5283", fontWeight: "bold" }}
            className="offset-1"
          >
            EVALUADOS
          </h1>
        </div>
        <hr />
        <div
          id="select-zona"
          className="col-lg-3 w-auto row d-flex align-items-center mt-4"
        >
          <Link to={"/new_person"} className="btn col-2 mx-3">
            <button id="add-btn" className="btn w-100">
              Nuevo Evaluado
            </button>
          </Link>
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
            value={currPop}
            onChange={(e) => {
              setCurrPop(Number(e.target.value));
            }}
            style={{ height: "30px" }}
          >
            {populations.map((population, index) => (
              <option
                key={index}
                value={population.id}
              >{`ID: ${population.id}, Edad: ${population.age} anios`}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
