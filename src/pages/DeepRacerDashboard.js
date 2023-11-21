import React, { useState, useEffect } from 'react';
import styles from '../styles/deepRacerDashboard.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function DeepRacerDashboard() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const [raceData, setRaceData] = useState([]);
  const [raceDataUsuarios, setRaceDataUsuarios] = useState([]);
  const [editMode, setEditMode] = useState(false);
 
function convertMillisecondsToTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function convertMillisecondsToDateTimeday(milliseconds) {
  const date = new Date(milliseconds);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}  ${day}/${month}/${year}`;
}


  useEffect(() => {
    
    axios.get('http://abmpersonalinternoapi.deliver.ar/api/deepracer/leaderboard')
      .then(response => {
        setRaceData(response.data);

        const usuarios = [
          {
            Alias: "Racer1",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer2",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer3",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer4",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer5",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer6",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer7",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer8",
            NombreApellido: "",
            DNI: "",
          },
        ];
        setRaceDataUsuarios(usuarios);
      })
      .catch(error => {
        /*const usuarios = [
          {
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer2",
            BestLapTime: 115000,
            SubmissionTime: 1668954000000, // Fecha en milisegundos (por ejemplo, 21 de febrero de 2023)
            LapCount: 4,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer3",
            BestLapTime: 110000,
            SubmissionTime: 1668867600000, // Fecha en milisegundos (por ejemplo, 20 de febrero de 2023)
            LapCount: 6,
            CollisionCount: 1,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer4",
            BestLapTime: 125000,
            SubmissionTime: 1668781200000, // Fecha en milisegundos (por ejemplo, 19 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 3,
            OffTrackCount: 2,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer5",
            BestLapTime: 118000,
            SubmissionTime: 1668694800000, // Fecha en milisegundos (por ejemplo, 18 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 0,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer6",
            BestLapTime: 130000,
            SubmissionTime: 1668608400000, // Fecha en milisegundos (por ejemplo, 17 de febrero de 2023)
            LapCount: 4,
            CollisionCount: 1,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },{
            Alias: "Racer1",
            BestLapTime: 120000,
            SubmissionTime: 1669040400000, // Fecha en milisegundos (por ejemplo, 22 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer2",
            BestLapTime: 115000,
            SubmissionTime: 1668954000000, // Fecha en milisegundos (por ejemplo, 21 de febrero de 2023)
            LapCount: 4,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer3",
            BestLapTime: 110000,
            SubmissionTime: 1668867600000, // Fecha en milisegundos (por ejemplo, 20 de febrero de 2023)
            LapCount: 6,
            CollisionCount: 1,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer4",
            BestLapTime: 125000,
            SubmissionTime: 1668781200000, // Fecha en milisegundos (por ejemplo, 19 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 3,
            OffTrackCount: 2,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer5",
            BestLapTime: 118000,
            SubmissionTime: 1668694800000, // Fecha en milisegundos (por ejemplo, 18 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 0,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer6",
            BestLapTime: 130000,
            SubmissionTime: 1668608400000, // Fecha en milisegundos (por ejemplo, 17 de febrero de 2023)
            LapCount: 4,
            CollisionCount: 1,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer7",
            BestLapTime: 112000,
            SubmissionTime: 1668522000000, // Fecha en milisegundos (por ejemplo, 16 de febrero de 2023)
            LapCount: 5,
            CollisionCount: 2,
            OffTrackCount: 1,
            SubmissionCount: 1,
          },
          {
            Alias: "Racer8",
            BestLapTime: 122000,
            SubmissionTime: 1668435600000, // Fecha en milisegundos (por ejemplo, 15 de febrero de 2023)
            LapCount: 3,
            CollisionCount: 0,
            OffTrackCount: 0,
            SubmissionCount: 1,
          },
          // ... Agrega más elementos si es necesario
        ];
        setRaceData(exampleRaceData);*/
        const usuarios = [
          {
            Alias: "Racer1",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer2",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer3",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer4",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer5",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer6",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer7",
            NombreApellido: "",
            DNI: "",
          },{
            Alias: "Racer8",
            NombreApellido: "",
            DNI: "",
          },
        ];
        setRaceDataUsuarios(usuarios);
        console.error('Error al obtener datos de la API', error);
    
      });
  }, []);

  const handleEdit = (entry) => {

    console.log('Editar entrada:', entry);

    setEditMode(false)
  };

  const notificarCarrera = () => {


    axios.post('http://abmpersonalinternoapi.deliver.ar/api/notificarCarrera')
      .then(response => {
        
        console.log('Carrera notificada con éxito');
      })
      .catch(error => {
        
        console.error('Error al notificar carrera');
      });
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
               <p>Vehículo más rápido: <strong>{raceData.length > 0 ? raceData[0].Alias : 'N/A'}</strong></p>
               <p>Cantidad de giros: <strong>{raceData.length > 0 ? raceData[0].LapCount : 'N/A'}</strong></p>
               <p>Colisiones: <strong>{raceData.length > 0 ? raceData[0].CollisionCount : 'N/A'}</strong></p>
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
        <button style={{ width: '300px', height:'200px'  }} onClick={notificarCarrera}>Notificar carrera</button>
        <div className={styles.scrollableTable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Alias</th>
              <th>Mejor tiempo</th>
              <th>Fecha</th>
              <th>Vueltas</th>
              <th>Colisiones</th>
              <th>Off track</th>
              <th>#Modelos</th>
            </tr>
          </thead>
          <tbody>
            {raceData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.Alias}</td>
                <td>{convertMillisecondsToTime(entry.BestLapTime)}</td>
                <td>{convertMillisecondsToDateTimeday(entry.SubmissionTime)}</td>
                <td>{entry.LapCount}</td>
                <td>{entry.CollisionCount}</td>
                <td>{entry.OffTrackCount}</td>
                <td>{entry.SubmissionCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
    
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>   Alias   </th>
              <th>   Nombre y Apellido   </th>
              <th>   DNI   </th>
              <th>      </th>
            </tr>
          </thead>
          <tbody>
            {raceDataUsuarios.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.Alias}</td>
                <td>{entry.NombreApellido}</td>
                <td>{entry.DNI}</td>
                <td>
                    {editMode ? (
              <>
                <button onClick={() => handleEdit(entry)}>Guardar</button>
                <button onClick={() => setEditMode(false)}>Cancelar</button>
              </>
            ) : (
              <button onClick={() => setEditMode(true)}>EDITAR</button>
            )}
          </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className='espacio'>
        </div>
        <div className='espacio1'>
        </div>
        </div>
      </div>
    
  );
}

export default DeepRacerDashboard;
