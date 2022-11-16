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
import ShortForm from '../../../../components/ShortForm'
import { getType, Type } from '../../../../data/type'
import ShowTypeInformation from './components/ShowTypeInformation'

const FindType: React.FC = () => {
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
    <IonPage id="admin-view-type-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>Ver información tipo</h6>
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
          <ShowTypeInformation type={type} />
        ) : (
          <>
            <IonItem>Ingresa un Rut válido por favor</IonItem>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default FindType
