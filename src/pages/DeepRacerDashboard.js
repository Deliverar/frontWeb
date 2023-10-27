import * as React from "react";
import styles from "../styles/deepRacerDashboard.module.css";
import { useNavigate } from "react-router-dom";
import { robots } from "../components/_data";
import { useTable } from "react-table";

function DeepRacerDashboard() {
  const data = React.useMemo(() => robots, []);
  const columns = React.useMemo(
    () => [
      {
        Headers: "Rank",
        accessor: "Rank",
      },
      {
        Headers: "Alias",
        accessor: "Alias",
      },
      {
        Headers: "Mejor tiempo",
        accessor: "BestLapTime",
      },
      {
        Headers: "Fecha",
        accessor: "SubmissionTime",
      },
      {
        Headers: "Vueltas",
        accessor: "LapCount",
      },
      {
        Headers: "Colisiones",
        accessor: "CollisionCount",
      },
      {
        Headers: "Off track",
        accessor: "OffTrackCount",
      },
      {
        Headers: "#Modelos",
        accessor: "SubmissionCount",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.background}>
      <div className={styles.backBtn} onClick={handleBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>

        <span>Volver</span>
      </div>
      <div className={styles.content}>
        <section className={styles.deepSection}>
          <div>
            <img
              src="/images/car.png"
              alt="DeepRacer"
              className={styles.image}
            />
            <div className={styles.globalData}>
              <p>
                Vehiculo mas rapido: <b>Lucasnm</b>
              </p>
              <p>
                Mejor tiempo: <b>1:03:21</b>
              </p>
              <p>Colisiones: 4</p>
            </div>
          </div>
          <div>
            <img
              src="/images/track.png"
              alt="DeepRacer"
              className={styles.image}
            />
            <div className={styles.globalData}>
              <h3>Puertos Lago Escobar</h3>
              <p>Pista de referencia: Speed Raceway</p>
            </div>
          </div>
        </section>

        <div className={styles.table}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Headers")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Nombre del vehiculo</th>
              <th>Mejor tiempo</th>
              <th>Giros totales</th>
              <th>Colisiones totales</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Roman</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Carlos</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jose</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Andres</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Andres</td>
              <td>00:00:00</td>
              <td>30</td>
              <td>4</td>
              <td>Modelo 1</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default DeepRacerDashboard;
