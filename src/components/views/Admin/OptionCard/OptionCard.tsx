import { IonCard } from '@ionic/react'
import './OptionCard.css'
interface Props {
  option: string
  index: number
  text: string
}

const OptionCard: React.FC<Props> = ({ option, index, text }) => {
  return (
    <>
      <IonCard key={index} href={`/admin/${option}`} class="admin-card-option">
        <h6>{text}</h6>
      </IonCard>
    </>
  )
}

export default OptionCard
