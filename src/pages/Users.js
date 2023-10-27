import BackgroundLayout from "../layouts/BackgroundLayout"
import styles from "../styles/users.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllUsers } from "../services/users"

function Users() {
  const [users, setUsers] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  const handleSearch = (e) => {
    const search = e.target.value
    const results = users.filter((user) => {
      return (
        user.uid.toLowerCase().includes(search.toLowerCase()) ||
        user.cn.toLowerCase().includes(search.toLowerCase())
      )
    })

    setSearchResults(results)
  }

  const handleBlock = (userId) => {
    const confirm = window.confirm(
      `¿Está seguro que desea bloquear al usuario ${userId}?`
    )

    if (confirm) {
      alert("Usuario bloqueado")
    }
  }

  const handleViewUser = (userId) => {
    navigate(`/edituser/${userId}`)
  }

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res)
    })
  }, [])

  return (
    <BackgroundLayout>
      <div className={styles.container}>
        <h1>Usuarios</h1>

        <div className={styles.users}>
          <ul>
            <input
              type="search"
              placeholder="Ingrese el nombre del usuario..."
              onChange={handleSearch}
            />
            {(searchResults.length > 0 ? searchResults : users).map((user) => {
              return (
                //<li key={crypto.randomUUID()}>
                <li>
                  <p>{user.uid}</p>
                  <p className={styles.id}>/{user.cn}</p>
                  <div>
                    <button onClick={() => handleViewUser(user.cn)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                    {user.isBlocked ? (
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button onClick={() => handleBlock(user.cn)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </BackgroundLayout>
  )
}

export default Users
