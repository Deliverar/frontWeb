import React from "react"
import Redirect from "../components/Redirect"

function Home() {
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
      {/* <Redirect
        title={"Todos los grupos"}
        to={"/allgroups"}
        image={"/images/aws.jpg"}
      /> */}
     
    </div>
  )
}

export default Home
