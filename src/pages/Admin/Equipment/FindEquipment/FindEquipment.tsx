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
import ShortFormEquipment from '../components/ShortFormEquipment'
import { Equipment } from '../../../../data/equipment'
import ShowEquipmentInformation from './components/ShowEquipmentInformation'

const FindEquipment: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment>()

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="admin-view-equipment-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>Ver informacion equipamiento</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <ShortFormEquipment
          setEquipment={setEquipment}
          textButton="Buscar"
          placeholder="ID"
        />
        {equipment ? (
          <ShowEquipmentInformation equipment={equipment} />
        ) : (
          <>
            <IonItem>Ingresa un ID válido por favor</IonItem>
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default FindEquipment
