import { IonItem, IonLabel } from '@ionic/react'
import { Type } from '../../../../config/interface-templates'

interface Props {
  type: Type
}

const ShowTypeInformation: React.FC<Props> = (Props) => {
  const { id, description } = Props.type
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
    </>
  )
}

export default ShowTypeInformation
