import { useForm } from "react-hook-form"
import styles from "../styles/createForm.module.css"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import { createUser, editUser, getUserByCn } from "../services/users"
import { useEffect, useRef, useState } from "react"

function CreateAccountForm({ isEdit = false }) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState(null);
  const formRef = useRef(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    if (!isEdit) {

      const res = await createUser(data, selectedAvatar)

      if (res.ok) {
        alert("Usuario creado exitosamente")
        setSelectedAvatar(null);
        reset()
      }
    } else {
      try {
        const res = await editUser(id, data)
        console.log(res)
        if (res.ok) {
          alert("Usuario editado exitosamente")
          navigate("/users")
        }
      } catch (error) {
        console.error(error)
        alert("Error al editar usuario")
      }
    }
  }

  useEffect(() => {
    if (isEdit) {
      getUserByCn(id).then((user) => {
        formRef.current.name.value = user.name
        formRef.current.lastname.value = user.lastName
        formRef.current.dni.value = user.dni
        formRef.current.birthDate.value = user.birthDate
        formRef.current.email.value = user.email
        const userAvatarURL = user.avatarURL
        setAvatarURL(userAvatarURL);

      })
    }
  }, [id, isEdit])

  return (
    <div>
      {isEdit && (
        <div className={styles.userInfo}>
          <div>
            <label htmlFor="userId">USERID</label>
            <input id="userId" value={`/${id}`} disabled />
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
        ref={formRef}
      >
        <div className={styles.scrollableContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.firstChild}>
              <label htmlFor="name">NOMBRE</label>
              <input
                id="name"
                name="name"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </div>
            <div>
              <label htmlFor="lastname">APELLIDO</label>
              <input
                id="lastname"
                name="lastname"
                {...register("lastname", { required: true })}
              />
            </div>
          </div>

          <div className={styles.flexContainer}>
            <div>
              <label htmlFor="dni">DNI</label>
              <input id="dni" name="dni" type="number" {...register("dni", { required: true })} />
            </div>
            <div className={styles.avatarGenderContainer}>
              <div className={styles.avatarContainer}>
                <label htmlFor="avatar">AVATAR</label>
                <div className={styles.avatarWrapper}>
                  <input
                    type="file"
                    accept="image/*"
                    id="avatar"
                    name="avatar"
                    onChange={handleAvatarChange}
                    className={styles.avatarInput}
                  />
                  {selectedAvatar || avatarURL ? ( // Mostrar la imagen si existe una URL de avatar o un selectedAvatar
                    <img src={selectedAvatar || avatarURL} alt="Avatar" className={styles.avatarImage} />
                  ) : (
                    <span className={styles.plusSymbol}>+</span>
                  )}
                </div>
              </div>
            </div>
          </div>


          <div className={styles.flexContainer}>
            <div className={styles.firstChild}>
              <label htmlFor="birthDate">Fecha de nacimiento</label>
              <input
                id="birthDate"
                name="birthDate"
                {...register("birthDate", { required: true })}
                type="date"
                defaultValue="YYYY-MM-DD"
              />
            </div>
            <div>
              <label htmlFor="gender">Genero</label>
              <select
                id="gender"
                type="select"
                name="gender"
                {...register("gender", { required: true })}
              >
                <option value="masculino">Masculino</option>
                <option value="femenino" selected>
                  Femenino
                </option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="email">CORREO ELECTRÓNICO</label>
            <input
              id="email"
              name="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          {!isEdit && (
            <div>
              <label htmlFor="password">CONTRASEÑA</label>
              <input
                id="password"
                name="password"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
          )}
        </div>
        {isEdit ? (
          <>
            <div className={styles.btnsContainer}>
              <button>GUARDAR CAMBIOS</button>
              <button type="button" className={styles.cancelBtn}>
                CANCELAR
              </button>
            </div>
            <p className={styles.deleteAcc}>
              Desea eliminar la cuenta?{" "}
              <Link to={`/deleteuser/${id}`} className={styles.linkToDelete}>
                Eliminar
              </Link>
            </p>
          </>
        ) : (
          <button className={styles.submitBtn}>CREAR USUARIO</button>
        )}
      </form>
    </div>
  )
}

export default CreateAccountForm