export const getAllUsers = async () => {
  try {
    const res = await fetch("http://abmpersonalinternoapi.deliver.ar/api/GetAllUsuarios")

    const data = await res.json()

    const objects = data.map((obj) => obj)

    const info = objects.map((user) => user)

    const attributes = info.map((user) => user.attributes)

    const usersUidList = []

    // const usersUid = attributes.map((userAttributes) => {
    //   return userAttributes.find((att) => {
    //     if (att.type == "uid") {
    //       usersUidList.push(att.values[0])
    //     }
    //   })
    // })

    const cns = attributes.map((userAttributes) => {
      //@ts-ignore
      return userAttributes.find((att) => {
        if (att.type === "cn") {
          return att.values[0]
        }
      })
    })

    return usersUidList.map((uid, index) => {
      return {
        uid,
        cn: cns[index].values[0],
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export const getUserByCn = async (cn) => {
  try {
    const res = await fetch(`http://abmpersonalinternoapi.deliver.ar/api/BuscarUsuariosPorCN?cn=${cn}`)

    const data = await res.json()

    const name = data[0].attributes.find((att) => att.type === "cn")
      .values[0]

    const lastName = data[0].attributes.find((att) => att.type === "sn")
      .values[0]

    const state = "Activo"

    const dni = data[0].attributes.find((att) => att.type === "carLicense")
      .values[0]

    const birthDate = data[0].attributes.find((att) => att.type === "postalCode")
      .values[0]

    const email = data[0].attributes.find((att) => att.type === "uid").values[0]

    const avatarURL = data[0].attributes.find((att) => att.type === "givenName").values[0];

    const user = {
      name,
      lastName,
      state,
      dni,
      birthDate,
      email,
      avatarURL,
    }

    return user
  } catch (error) {
    console.error(error)
  }
}
export const createUser = async (user, selectedAvatar) => {
  try {
    // Agregar la imagen en base64 al objeto de usuario
    user.avatar = selectedAvatar;

    const res = await fetch("http://abmpersonalinternoapi.deliver.ar/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // Enviar el objeto de usuario como JSON
    });

    return res;
  } catch (error) {
    console.error(error);
  }
}


export const editUser = async (id, newUser) => {
  const res = await fetch(`http://abmpersonalinternoapi.deliver.ar/api/usuarios/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })

  return res
}


export const getAllGroups = async () => {
  try {
    const res = await fetch("http://abmpersonalinternoapi.deliver.ar/api/grupos-ldap") // Ajusta la URL según tu configuración

    if (res.ok) {
      const data = await res.json()
      const groups = data.map((group) => ({
        gidNumber: group.attributes.find((attr) => attr.type === "gidNumber")
          .values[0],
        cn: group.attributes.find((attr) => attr.type === "cn").values[0],
      }))
      return groups
    } else {
      console.error("Error al obtener la lista de grupos:", res.statusText)
      return []
    }
  } catch (error) {
    console.error("Error inesperado:", error)
    return []
  }
}

// users.js
export const addUserToGroupAPI = (grupo, usuario) => {
  return fetch(
    `http://abmpersonalinternoapi.deliver.ar/api/AgregarUsuariosGrupo?grupo=${grupo}&usr=${usuario}`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log("Solicitud exitosa:", response.status)
        return response.json()
      } else {
        console.error("Error al agregar el usuario al grupo:", response.status)
        return Promise.reject("Error al agregar el usuario al grupo")
      }
    })
    .then((data) => {
      console.log("Respuesta del servidor:", data)
      return data;
      
    })
    .catch((error) => {
      console.error("Error inesperado:", error)
      throw error;
    })
}

export const login = async (email, password) => {
  try {
    const response = await fetch(`http://abmpersonalinternoapi.deliver.ar/api/LoginUid?uid=${email}&pass=${password}`);

    if (response.status === 200) {
      const result = await response.json();

      if (result.status === "ok") {
        return "Autenticación exitosa";
      } else {
        return "Credenciales incorrectas";
      }
    } else {
      return "Credenciales incorrectas";
    }
  } catch (error) {
    console.error("Error de inicio de sesión:", error);
    return "Error de inicio de sesión";
  }
};