import { IonContent, IonPage } from '@ionic/react'
import { useState } from 'react'
import { User } from '../../../config/interface-templates'
import LoginForm from './LoginForm/LoginForm'

const Login: React.FC = () => {
  const [user, setUser] = useState<User>({} as User)
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
