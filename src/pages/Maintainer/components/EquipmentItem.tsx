import { IonItem, IonLabel } from '@ionic/react'
import { Equipment } from '../../../data/equipment'

interface Props {
  equipment: Equipment
}

const EquipmentItem: React.FC<Props> = ({ equipment }) => {
  return (
    <IonItem routerLink={`/equipment_tasks/${equipment.id}`} detail>
      <IonLabel className="ion-text-wrap">
        <h2>{equipment.description}</h2>
      </IonLabel>
    </IonItem>
  )
}

export default EquipmentItem
