import { IonItem, IonLabel } from '@ionic/react'
import { Equipment } from '../../../../config/interface-templates'

interface Props {
  equipment: Equipment
}

const ShowEquipmentInformation: React.FC<Props> = (Props) => {
  const { description, movility, idCategory, idType, idLocation } =
    Props.equipment

  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>Descripción: {description}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Movilidad: {movility ? 'Si' : 'No'}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Categoría: {idCategory}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Tipo: {idType}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Ubicación: {idLocation}</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default ShowEquipmentInformation
