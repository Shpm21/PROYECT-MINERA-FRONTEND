import { IonItem, IonLabel } from '@ionic/react'

interface Props {
  text: string
}
const DeleteMessage: React.FC<Props> = ({ text }) => {
  return (
    <IonItem>
      <IonLabel>
        <h2>¿Está seguro de que deseas este {text}?</h2>
      </IonLabel>
    </IonItem>
  )
}

export default DeleteMessage
