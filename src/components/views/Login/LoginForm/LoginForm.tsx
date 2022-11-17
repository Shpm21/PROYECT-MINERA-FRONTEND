import { IonContent, IonIcon, IonInput, IonItem, IonLabel } from '@ionic/react'
import { useState } from 'react'
import LoginEnterButton from '../LoginEnterButton/LoginEnterButton'
import './LoginForm.css'

interface Props {
  setUser(user: any): void
}

const LoginForm: React.FC<Props> = (Props) => {
  const { setUser } = Props
  const [rut, setRut] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="login-container">
      <div className="login-box-shadow">
        <IonItem class="login-item">
          <IonIcon name="person-circle-outline" color="primary" />
          <IonLabel></IonLabel>
          <IonInput
            placeholder="Rut"
            required={true}
            value={rut}
            type="text"
            onIonChange={(ev) => setRut(ev.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem class="login-item">
          <IonIcon name="lock-closed" color="primary" />
          <IonLabel></IonLabel>
          <IonInput
            placeholder="Contraseña"
            required={true}
            value={password}
            type="password"
            onIonChange={(ev) => setPassword(ev.detail.value!)}
          ></IonInput>
        </IonItem>
        <LoginEnterButton rut={rut} password={password} setUser={setUser} />
      </div>
    </div>
  )
}

export default LoginForm
