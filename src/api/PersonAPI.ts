import api from ".";
import { Person, Zone } from "my-types";

export const getAllPeople = async () => {
  try {
    const res = await api.get("/person");
    const people: Person[] = res.data.payload;
    return people;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllZones = async () => {
  try {
    const res = await api.get("/person/getallzones");
    const zones: Zone[] = res.data.payload;
    return zones;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPopulations = async (zoneId: number) => {
  try {
    const res = await api.get("/person/getpopulations", {
      params: { zoneId },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPeopleByPopulation = async (populationId: number) => {
  try {
    const res = await api.get("person/getpeoplebygroup", {
      params: { populationId },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deletePerson = async (id: number) => {
  try {
    const res = await api.delete(`/person/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error al eliminar persona:", error);
    return;
  }
};
