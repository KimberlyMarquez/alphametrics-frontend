export default function HeaderList() {
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
        <div id="select-zona" className="col-lg-3 w-auto row">
          <select name="zone" id="zone" className="col-2 offset-6" style={{height:"30px"}}>
            <option value="">Zona 1</option>
          </select>
          <select name="population" id="population" className="col-2 offset-1" >
            <option value="">Poblacion 1</option>
            </select>
        </div>
      </div>
    </>
  );
}
