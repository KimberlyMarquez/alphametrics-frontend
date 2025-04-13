export default function NewElement() {
  return (
    <>
      <main className="col-lg-10 d-block" id="main">
        <div id="title" className="mt-lg-5 offset-1 mt-3">
          <h1 style={{ fontSize: "60px", color: "#4E5283", fontWeight: "bold" }}>NUEVO EVALUADO</h1>
        </div>
        <hr className="offset-1"/>
        <form action="" id="form" className="mt-lg-5">
          <div className="mb-lg-5 row offset-1 offset-lg-0 me-5 me-lg-0">
            <div id="names" className="col-lg-3 offset-lg-1">
              <label htmlFor="" className="form-label">
                Nombre/s
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre/s..."
              />
            </div>
            <div id="first-lastname" className="col-lg-3">
              <label htmlFor="" className="form-label">
                Primer Apellido
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Primer Apellido..."
              />
            </div>
            <div id="second-lastname" className="col-lg-3">
              <label htmlFor="" className="form-label">
                Segundo Nombre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Segundo Apellido..."
              />
            </div>
          </div>
          <div className="row offset-1 offset-lg-0 me-5 me-lg-0">
            <div id="curp" className="col-lg-3 offset-lg-1">
              <label htmlFor="" className="form-label">
                CURP
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="CURP..."
              />
            </div>
            <div id="status" className="col-lg-3">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Estatus</p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="grad"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="grad">
                  Graduado
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="reprobado"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="reprobado">
                  Reprobado
                </label>
              </div>
            </div>
            <div id="gen" className="col-lg-3">
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>Estatus</p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gen"
                  id="masc"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="masc">
                  Masculino
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gen"
                  id="fem"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="fem">
                  Femenino
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-5 mt-lg-0">
            <div
              id="buttons"
              className="col-lg-3 offset-lg-7 d-flex gap-5 justify-content-center"
            >
              <button
                id="cancel"
                className="btn d-flex align-items-center justify-content-center"
                type="submit"
              >
                Cancelar
              </button>
              <button
                id="submit"
                className="btn d-flex align-items-center justify-content-center"
                type="submit"
              >
                Crear
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
