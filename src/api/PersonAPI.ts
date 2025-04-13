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
