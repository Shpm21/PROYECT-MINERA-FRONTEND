import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/react'
import { User } from '../../../data/user'
import './UserItem.css'

interface Props {
  user: User
}

const UserItem: React.FC<Props> = (Props) => {
  const { user } = Props
  return (
    <IonItem class="item-user-item">
      <IonIcon icon="person-circle-outline" />
      <IonLabel>
        <h3> {user.name}</h3>
      </IonLabel>
      <IonButton>Asignar</IonButton>
    </IonItem>
  )
}

export default UserItem
