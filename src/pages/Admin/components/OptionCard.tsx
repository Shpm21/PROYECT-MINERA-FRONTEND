import { IonCard } from '@ionic/react'

interface Props {
  option: string
  index: number
}

const OptionCard: React.FC<Props> = ({ option, index }) => {
  return (
    <>
      <IonCard key={index} routerLink={`/${option}`}>
        <h6>{option}</h6>
      </IonCard>
    </>
  )
}

export default OptionCard
