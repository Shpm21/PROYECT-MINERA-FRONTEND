import { IonIcon, IonItem, IonLabel } from '@ionic/react'
import './AdminOption.css'
interface Props {
  option: string
  text: string
  icon: string
  action: string
}

const AdminOption: React.FC<Props> = (Props) => {
  const { option, text, icon, action } = Props

  const colorIcons = 'warning'
  return (
    <>
      <IonItem
        href={`admin/${option}/${action}`}
        class="admin-item-option"
        lines="none"
      >
        <div className="item-container">
          <IonIcon icon={icon} color={colorIcons} class="admin-icon-option" />
          <IonLabel>
            <h2>{text}</h2>
          </IonLabel>
        </div>
      </IonItem>
    </>
  )
}

export default AdminOption
