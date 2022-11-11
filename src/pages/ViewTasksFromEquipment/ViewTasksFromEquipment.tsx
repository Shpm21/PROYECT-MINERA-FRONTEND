import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Equipment, getEquipment } from '../../data/equipment'

const ViewTasksFromEquipment: React.FC = () => {
  const params = useParams<{ id: string }>()
  const [equipment, setEquipment] = useState<Equipment>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useIonViewWillEnter(() => {
    setIsLoading(true)
    const equipment = getEquipment(parseInt(params.id, 10))
    setEquipment(equipment)
    setIsLoading(false)
  })
  return (
    <IonPage id="view-equipment-maintainer-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/man"
              icon="chevron-back-outline"
            ></IonBackButton>
          </IonButtons>
          <h6>Equipamiento {params.id}</h6>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {!isLoading ? (
          equipment ? (
            <></>
          ) : (
            <div>Item no encontrado</div>
          )
        ) : (
          <div>Cargando...</div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default ViewTasksFromEquipment
