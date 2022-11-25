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
import { getEquipment } from '../../../data/equipment'
import ShowEquipmentInformation from './ShowEquipmentInformation/ShowEquipmentInformation'
import { Equipment } from '../../../config/interface-templates'

const EquipmentFind: React.FC = () => {
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
        <ShortForm
          handleButton={handleButton}
          changeFunctions={changeFunctions}
          keyMenuAdminText={'equipment'}
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

export default EquipmentFind
