import { IonButton } from '@ionic/react'
import { UserLogin } from '../../../../config/interface-templates'
import { login } from '../../../../api/login'
import { LocalStorage } from '../../../../services/LocalStorage'

interface Props {
  rut: string
  password: string
  setUser(user: UserLogin): void
}

const LoginEnterButton: React.FC<Props> = (Props) => {
  const { rut, password, setUser } = Props

  const handleLoginButton = async () => {
    const us = await login({ rut, password })

    console.log(JSON.stringify(us))
    if (us) {
      setUser(us)
      LocalStorage.setToken(us.token)
    }
  }
  return (
    <IonButton
      expand="block"
      // routerLink="/home"
      // routerDirection="none"
      color="primary"
      disabled={rut === '' || password === ''}
      onClick={handleLoginButton}
    >
      Ingresar
    </IonButton>
  )
}

export default LoginEnterButton
