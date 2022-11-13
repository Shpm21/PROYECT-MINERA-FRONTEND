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
import ShortForm from '../components/ShortFormEquipment'
import { Equipment } from '../../../../data/equipment'
import DeleteMessage from '../../../../components/DeleteMessage'
import ShortFormEquipment from '../components/ShortFormEquipment'

const DeleteEquipment: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment>()

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
          <h6>Eliminar Equipamiento</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <ShortFormEquipment
          setEquipment={setEquipment}
          textButton="Eliminar"
          placeholder="ID"
        />
        {equipment ? (
          <>
            <DeleteMessage text="equipamiento" />
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

export default DeleteEquipment
