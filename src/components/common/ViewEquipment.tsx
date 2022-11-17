import { Equipment } from '../../data/equipment'
import EquipmentItem from './EquipmentItem'

interface Props {
  equipments: Equipment[]
  userType: string
}
const ViewEquipment: React.FC<Props> = (Props) => {
  const { equipments, userType } = Props
  return (
    <>
      {equipments.map((equipment) => (
        <EquipmentItem
          key={equipment.id}
          equipment={equipment}
          userType={userType}
        />
      ))}
    </>
  )
}

export default ViewEquipment
