import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/login.module.css"
import { login } from "../services/users";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [saveCredentials, setSaveCredentials] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage(''); // Limpia el mensaje de error al cambiar el correo electrónico
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setMessage(''); // Limpia el mensaje de error al cambiar la contraseña
  }

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const isNonEmptyString = (value) => {
    return value.trim() !== '';
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Realiza la lógica de autenticación aquí
    if (isValidEmail(email) && isNonEmptyString(password)) {
      const response = await login(email, password);
      
      if (response === "Autenticación exitosa") {
        // Autenticación exitosa
        if (saveCredentials) {
          // Guarda las credenciales en localStorage si el usuario acepta
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        }
        console.log("Redirigiendo a /home");
        navigate("/home");
        } else {
        setMessage("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } else {
      setMessage("Por favor, ingrese un correo electrónico válido y una contraseña válida.");
    }
  };
  
  
  return (
    <div className={styles.formContainer}>
      <form className={styles.loginForm}>
        <div className={styles.titleContainer}>
          <img src="/images/logo.png" alt="Logo" className={styles.logoImg} />
          <h1 className={styles.title}>Bienvenid@</h1>
        </div>
        <div className={styles.formInside}>
          <label htmlFor="user">Usuario</label>
          <input
            id="user"
            type="text"
            placeholder="Usuario"
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />

          <div className={styles.rememberContainer}>
            <input type="checkbox" id="remember" checked={saveCredentials}
              onChange={() => setSaveCredentials(!saveCredentials)} />
            <label htmlFor="remember">Recordar usuario</label>
          </div>
          <button onClick={handleLogin}>Ingresar</button>
          {message && <p className="error-message">{message}</p>}
        </div>
      </form>
      <div className={styles.imgForm}>
        <img src="/images/DecoracionDerecha.png" alt="Imagen de decoracion" />
      </div>
    </div>
  )
}

export default LoginPage
