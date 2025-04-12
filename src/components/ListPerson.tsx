import HeaderList from "./HeaderList";
import List from "./List";
import { getAllPeople } from "../api/PersonAPI";
import { useEffect, useState } from "react";
import { Person } from "my-types";

export default function ListPerson() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    getAllPeople().then((data: Person[]) => setPeople(data));
  }, []);
  return (
    <main className="col-lg-10 d-block" id="main">
      <HeaderList />
      <List people={people} />
    </main>
  );
}
