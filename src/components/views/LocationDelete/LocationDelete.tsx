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
import { getLocation } from '../../../data/location'
import { Location } from '../../../config/interface-templates'

const LocationDelete: React.FC = () => {
  const [location, setLocation] = useState<Location>()
  const [id, setId] = useState<string>('')

  const handleButton = () => {
    const l = getLocation(parseInt(id, 10))
    setLocation(l)
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
    <IonPage id="admin-delete-location-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>Eliminar Localización</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <ShortForm
          handleButton={handleButton}
          changeFunctions={changeFunctions}
          keyMenuAdminText={'location'}
        />
        {location ? (
          <>
            <DeleteMessage text="localización" />
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

export default LocationDelete
