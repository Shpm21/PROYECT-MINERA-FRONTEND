import { IonButton, IonContent, IonPage } from '@ionic/react'
import { useState } from 'react'
import { UserLogin } from '../../../config/interface-templates'
import LoginForm from './LoginForm/LoginForm'
import { Redirect } from 'react-router'

const Login: React.FC = () => {
  const [user, setUser] = useState<UserLogin>({} as UserLogin)
  const sortRoleUser = () => {
    switch (user.id_role) {
      case 1:
        return (
          //redirecciona a la vista de administrador con router
          <Redirect
            to={{
              pathname: '/admin'
            }}
          />
        )
      case 2:
        return (
          //redirecciona a la vista de administrador con router
          <Redirect
            to={{
              pathname: '/pla'
            }}
          />
        )
      case 3:
        return 'Mantenedor'
    }
  }
  return (
    <IonPage id="login-page">
      <IonContent>
        {user ? sortRoleUser() : <></>}
        <LoginForm setUser={setUser} />
      </IonContent>
    </IonPage>
  )
}

export default Login
