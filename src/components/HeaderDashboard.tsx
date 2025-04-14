import { useEffect, useState } from "react";
import { getAllZones, getPopulations } from "../api/PersonAPI";
import { Zone, Population } from "my-types";

type Props = {
  setCurrPop: (id: number) => void;
  currPop: number;
  onSelectionUpdate?: (
    zone: Zone | null,
    population: Population | null
  ) => void;
};

export default function HeaderDashboard({
  setCurrPop,
  currPop,
  onSelectionUpdate,
}: Props) {
  const [zones, setZones] = useState<Zone[]>([]);
  const [populations, setPopulations] = useState<Population[]>([]);
  const [selectedZoneId, setSelectedZoneId] = useState<number | string>("");
  const [currentZone, setCurrentZone] = useState<Zone | null>(null);
  const [currentPopulation, setCurrentPopulation] = useState<Population | null>(
    null
  );

  useEffect(() => {
    getAllZones().then((data: Zone[]) => {
      setZones(data);
      const defaultZone = data[0].id;
      setSelectedZoneId(defaultZone);
      setCurrentZone(data[0]);
    });
  }, []);

  useEffect(() => {
    if (!selectedZoneId) return;

    getPopulations(Number(selectedZoneId)).then(populations => {
      setPopulations(populations);
      const newPop = populations.find(pop => pop.id === currPop) ?? populations[0];
      setCurrPop(newPop.id);
      setCurrentPopulation(newPop);
    });
  }, [selectedZoneId, currPop,setCurrPop]);


  useEffect(() => {
    if (onSelectionUpdate) {
      onSelectionUpdate(currentZone, currentPopulation);
    }
  }, [currentZone, currentPopulation, onSelectionUpdate]);

  const handleZoneChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const zoneId = event.target.value;
    setSelectedZoneId(zoneId);

    const zone = zones.find((zone) => zone.id === Number(zoneId));
    if (zone) {
      setCurrentZone(zone);
    }

    if (zoneId) {
      const populationsData = await getPopulations(Number(zoneId));
      setPopulations(populationsData);

      if (populationsData.length > 0) {
        setCurrPop(populationsData[0].id);
        setCurrentPopulation(populationsData[0]);
      } else {
        setCurrentPopulation(null);
      }
    } else {
      setPopulations([]);
      setCurrentPopulation(null);
    }
  };

  const handlePopulationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const popId = Number(event.target.value);
    setCurrPop(popId);

    const pop = populations.find((p) => p.id === popId);
    if (pop) {
      setCurrentPopulation(pop);
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
            DASHBOARD
          </h1>
        </div>
        <hr />
        <div
          id="select-zona"
          className="col-lg-3 w-auto row d-flex align-items-center mt-4"
        >
          <select
            name="zone"
            id="zone"
            className="col-2 offset-7"
            style={{ height: "30px" }}
            value={selectedZoneId}
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
            onChange={handlePopulationChange}
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
