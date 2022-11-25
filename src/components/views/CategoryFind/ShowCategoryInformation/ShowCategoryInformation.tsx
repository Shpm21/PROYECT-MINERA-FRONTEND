import { IonItem, IonLabel, useIonViewWillEnter } from '@ionic/react'
import { Category } from '../../../../config/interface-templates'

interface Props {
  category: Category
}

const ShowCategoryInformation: React.FC<Props> = (Props) => {
  const { id, description, idMaintenanceG } = Props.category

  useIonViewWillEnter(() => {})
  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>ID: {id}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Descripción: {description}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Guía de mantenimiento: {idMaintenanceG}</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default ShowCategoryInformation
