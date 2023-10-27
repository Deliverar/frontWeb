import { useNavigate, useParams } from "react-router-dom"
import FormLayout from "../layouts/FormLayout"
import styles from "../styles/deleteForm.module.css"
import React, { useState } from 'react';

function DeleteUserPage() {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const { id } = useParams(); // Obtener el ID del usuario desde la URL

  const handleCancel = () => {
    navigate('/users');
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');
  
    if (confirmDelete) {
      // Usuario confirmó la eliminación
      try {
        fetch(`http://localhost/api/deleteUsers/${id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.status === 204) {
              // Usuario eliminado con éxito, redirige a la página de usuarios
              navigate('/users');
            } else {
              // Manejar otros casos, como si no se pudo eliminar el usuario
              console.error('Error al eliminar el usuario');
              alert('Error al eliminar el usuario');
            }
          })
          .catch((error) => {
            console.error('Error de eliminación:', error);
            alert('Error de eliminación');
          });
      } catch (error) {
        console.error('Error de eliminación:', error);
        alert('Error de eliminación');
      }
    }
  };


  return (
    <FormLayout title="Eliminar cuenta">
      <div className={styles.formContainer}>
        <h3>
          Hola!
          <br />
          Lamentamos que tengas que eliminar la cuenta.
        </h3>
        <form className={styles.form}>
          <label htmlFor="why">¿Por qué quieres eliminar la cuenta?</label>
          <textarea name="why" id="why"  value={reason}
          onChange={(e) => setReason(e.target.value)}></textarea>

          <label htmlFor="password">
            Para continuar, introduce tu contraseña
          </label>
          <input type="password" name="password" id="password" />

          <div className={styles.btnsContainer}>
            <button type="submit" className={styles.deleteBtn} onClick={handleDelete}>
              ELIMINAR DEFINITIVAMENTE
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={handleCancel}
            >
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </FormLayout>
  )
}

export default DeleteUserPage
