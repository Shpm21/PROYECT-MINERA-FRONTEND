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
import ShortForm from '../../common/ShortForm'
import { getLocation } from '../../../data/location'
import ShowLocationInformacion from './ShowLocationInformation/ShowLocationInformation'
import { Location } from '../../../config/interface-templates'

const LocationFind: React.FC = () => {
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
    <IonPage id="admin-view-location-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>Ver información localización</h6>
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
          <ShowLocationInformacion location={location} />
        ) : (
          <>
            <IonItem>Ingresa un Rut válido por favor</IonItem>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default LocationFind
