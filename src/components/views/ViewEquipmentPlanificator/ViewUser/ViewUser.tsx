import { useEffect, useState } from 'react'
import { getUsers } from '../../../../data/user'
import UserItem from '../UserItem/UserItem'

interface User {
  rut: string
  password: string
  mail: string
  name: string
  lastName: string
  secondLastName: string
  id_role: number
  id_zone: number
}

const ViewUser: React.FC = () => {
  const [users, setUsers] = useState([] as User[])

  useEffect(() => {
    const getUsersD = async () => {
      const users = getUsers()
      setUsers(users)
    }
    getUsersD()
  }, [])

  const planificatorsUsers = users.filter((user) => user.id_role === 2)

  return (
    <>
      {planificatorsUsers.map((user) => (
        <UserItem user={user} />
      ))}
    </>
  )
}

export default ViewUser
