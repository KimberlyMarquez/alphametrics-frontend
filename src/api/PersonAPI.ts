import api from "."
import {Person} from "my-types"

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
