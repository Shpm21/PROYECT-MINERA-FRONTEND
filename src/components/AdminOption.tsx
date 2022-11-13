import { IonIcon, IonItem, IonLabel } from '@ionic/react'

interface Props {
  option: string
  text: string
  icon: string
  action: string
}

const AdminOption: React.FC<Props> = (Props) => {
  const { option, text, icon, action } = Props

  const colorIcons = 'primary'
  return (
    <>
      <IonItem routerLink={`${option}/${action}`} class="admin-item-option">
        <IonIcon icon={icon} color={colorIcons} class="admin-icon-option" />
        <IonLabel>
          <h2>{text}</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default AdminOption
