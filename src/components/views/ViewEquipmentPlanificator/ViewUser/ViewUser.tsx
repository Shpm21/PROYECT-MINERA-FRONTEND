import { useEffect, useState } from 'react'
import { User } from '../../../../config/interface-templates'
import { getUsers } from '../../../../data/user'
import UserItem from '../UserItem/UserItem'

const ViewUser: React.FC = () => {
  const [users, setUsers] = useState([] as User[])

  useEffect(() => {
    const getUsersD = async () => {
      const users = getUsers()
      setUsers(users)
    }
    getUsersD()
  }, [])

  const planificatorsUsers = users.filter((user) => user.idRole === 2)

  return (
    <>
      {planificatorsUsers.map((user) => (
        <UserItem user={user} />
      ))}
    </>
  )
}

export default ViewUser
