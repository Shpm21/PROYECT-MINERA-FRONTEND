import { IonButton } from '@ionic/react'
import { useEffect, useState } from 'react'
import { User } from '../../../../config/interface-templates'
import { getUser } from '../../../../data/user'

interface Props {
  rut: string
  password: string
  setUser(user: User): void
}

const LoginEnterButton: React.FC<Props> = (Props) => {
  const { rut, password, setUser } = Props

  useEffect(() => {
    const getUserByRut = (rut: string) => {
      const us = getUser(rut)
      if (us) {
        setUser(us)
      }
    }
  }, [rut, password])
  return (
    <IonButton
      expand="block"
      routerLink="/home"
      routerDirection="none"
      color="primary"
      disabled={rut === '' || password === ''}
    >
      Ingresar
    </IonButton>
  )
}

export default LoginEnterButton
