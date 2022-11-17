import { IonContent, IonPage } from '@ionic/react'
import { useState } from 'react'
import LoginForm from './LoginForm/LoginForm'

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
const Login: React.FC = () => {
  const [user, setUser] = useState({} as User)
  return (
    <IonPage id="login-page">
      <IonContent>
        {/* {!user ? (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.lastName}</h1>
          </div>
        ) : (
          <LoginForm setUser={setUser} />
          )} */}
        <LoginForm setUser={setUser} />
      </IonContent>
    </IonPage>
  )
}

export default Login
