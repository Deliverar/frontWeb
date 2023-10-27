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
    
    axios.get('http://localhost/api/deepracer/leaderboard')
      .then(response => {
        setRaceData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
    
      });
  }, []);

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
      </div>
    </div>
  );
}

export default DeepRacerDashboard;
