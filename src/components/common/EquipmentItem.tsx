import { IonItem, IonLabel } from '@ionic/react'
import { Equipment } from '../../config/interface-templates'
import './EquipmentItem.css'

interface Props {
  equipment: Equipment
  userType: string
}

const EquipmentItem: React.FC<Props> = ({ equipment, userType }) => {
  return (
    <IonItem
      routerLink={`/equipment_${userType}/${equipment.id}`}
      detail
      class="planificator-equipment-item"
    >
      <IonLabel className="ion-text-wrap" class="planificator-equipment-label">
        <h2>{equipment.description}</h2>
      </IonLabel>
    </IonItem>
  )
}

export default EquipmentItem
