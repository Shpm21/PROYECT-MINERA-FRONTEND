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
import { getType, Type } from '../../../data/type'

const TypeDelete: React.FC = () => {
  const [type, setType] = useState<Type>()
  const [id, setId] = useState<string>('')

  const handleButton = () => {
    const t = getType(parseInt(id, 10))
    setType(t)
  }

  const changeFunctions = (ev: any) => {
    setId(ev.detail.value!)
  }
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="admin-delete-type-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>Eliminar Tipo</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <ShortForm
          handleButton={handleButton}
          changeFunctions={changeFunctions}
          keyMenuAdminText={'type'}
        />
        {type ? (
          <>
            <DeleteMessage text="tipo" />
          </>
        ) : (
          <>
            <IonItem>Ingresa un ID válido por favor</IonItem>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default TypeDelete
