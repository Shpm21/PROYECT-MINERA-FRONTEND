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
import { Equipment } from '../../../config/interface-templates'
import { getEquipment } from '../../../data/equipment'
import DeleteMessage from '../../common/DeleteMessage'
import ShortForm from '../../common/ShortForm'

const EquipmentDelete: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment>()
  const [id, setId] = useState<string>('')
  const handleButton = () => {
    const e = getEquipment(parseInt(id, 10))
    setEquipment(e)
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
        <ShortForm
          handleButton={handleButton}
          changeFunctions={changeFunctions}
          keyMenuAdminText={'equipment'}
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

export default EquipmentDelete
