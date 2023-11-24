import React from "react"
import Redirect from "../components/Redirect"
import { sendPay } from "../services/pay"

function Home() {
  const handlePay = async () => {
    try {
      await sendPay()
      return alert("Pago realizado con exito")
    } catch (error) {
      return alert("Error al realizar el pago")
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "40px",
        gridAutoRows: "minmax(100px, auto)",
      }}
    >
      <Redirect
        title={"Buscar usuario"}
        to={"/users"}
        image={"/images/home-buscar.jpg"}
      />
      <Redirect
        title={"Crear usuario"}
        to={"/createuser"}
        image={"/images/home-mas.jpg"}
      />
      <Redirect
        title={"Gestion de grupos"}
        to={"/allgroups"}
        image={"/images/home-fav.jpg"}
      />
      <Redirect
        title={"Deep Racer Dashboard"}
        to={"/deepracerdashboard"}
        image={"/images/aws.jpg"}
      />
      <button style={{ backgroundColor: "transparent" }} onClick={handlePay}>
        <Redirect title={"Pagar"} image={"/images/anadir-a-la-cesta.png"} />
      </button>
    </div>
  )
}

export default Home
