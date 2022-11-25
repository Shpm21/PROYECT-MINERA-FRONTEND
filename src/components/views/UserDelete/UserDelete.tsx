import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar
} from '@ionic/react'
import { useState } from 'react'
import DeleteMessage from '../../common/DeleteMessage'
import ShortForm from '../../common/ShortForm'
import { getUser } from '../../../data/user'
import { User } from '../../../config/interface-templates'

const UserDelete: React.FC = () => {
  const [user, setUser] = useState<User>()
  const [rut, setRut] = useState<string>('')

  const handleButton = () => {
    const u = getUser(rut)
    setUser(u)
  }

  const changeFunctions = (ev: any) => {
    setRut(ev.detail.value!)
  }

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="admin-delete-equipment-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>Eliminar Usuario</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <ShortForm
          handleButton={handleButton}
          changeFunctions={changeFunctions}
          keyMenuAdminText={'user'}
        />
        {user ? (
          <>
            <DeleteMessage text="usuario" />
          </>
        ) : (
          <>
            <IonItem>Ingresa un Rut válido por favor</IonItem>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default UserDelete
