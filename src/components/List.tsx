import { Person } from "my-types";

type Props = {
  people: Person[];
};

export default function List({ people }: Props) {
  return (
    <>
      <div id="tabla" className="offset-1 mt-5 me-5">
        <table className="table table-hover text-center align-middle">
          <thead>
            <tr className="table-active">
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">CURP</th>
              <th scope="col">Genero</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {people.map((people, index) => (
              <tr className="" key={index}>
                <th scope="row">{people.id}</th>
                <td>{`${people.first_name} ${people.second_name} ${people.first_lastname} ${people.second_lastname}`}</td>
                <td>{people.curp}</td>
                <td>{people.gender}</td>
                <td>{people.status ? "Graduado" : "No Graduado"}</td>
                <th scope="row">
                  <a href="#">
                    <img
                      src="img/trash_icon.png"
                      alt="delete"
                      id="delete-icon"
                    />
                  </a>
                </th>
                <th scope="row">
                  <a href="#">
                    <img src="img/edit_icon.png" alt="edit" id="edit-icon" />
                  </a>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
