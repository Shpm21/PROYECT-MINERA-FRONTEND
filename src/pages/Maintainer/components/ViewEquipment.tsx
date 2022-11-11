import { Equipment } from '../../../data/equipment'
import EquipmentItem from './EquipmentItem'

interface Props {
  equipments: Equipment[]
}

const ViewEquipment: React.FC<Props> = (Props) => {
  const { equipments } = Props
  return (
    <>
      {equipments.map((equipment) => (
        <EquipmentItem key={equipment.id} equipment={equipment} />
      ))}
    </>
  )
}

export default ViewEquipment
