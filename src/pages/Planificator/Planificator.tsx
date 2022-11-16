import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import { Equipment, getEquipments } from '../../data/equipment'
import EquipmentItem from '../../components/EquipmentItem'
import ViewEquipment from '../../components/ViewEquipment'

const Planificator: React.FC = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([])
  useIonViewWillEnter(() => {
    const equipment = getEquipments()
    setEquipments(equipment)
  })

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }
  return (
    <IonPage id="planificator-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" icon="exit-outline" />
          </IonButtons>
          <h6>Equipamientos sin mantenedor asignado</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <ViewEquipment equipments={equipments} userType="planificator" />
      </IonContent>
    </IonPage>
  )
}

export default Planificator
