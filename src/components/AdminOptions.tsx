import { IonIcon, IonItem, IonLabel } from '@ionic/react'

const colorIcons: string = 'primary'

interface Props {
  option: string
}
const AdminOptions: React.FC<Props> = ({ option }) => {
  return (
    <>
      <IonItem routerLink={`${option}/add`}>
        <IonIcon icon="add-circle" color={colorIcons} />
        <IonLabel>
          <h2>Agregar</h2>
        </IonLabel>
      </IonItem>
      <IonItem routerLink={`${option}/delete`}>
        <IonIcon icon="close-circle" color={colorIcons} />
        <IonLabel>
          <h2>Eliminar</h2>
        </IonLabel>
      </IonItem>
      <IonItem routerLink={`${option}/update`}>
        <IonIcon icon="pencil" color={colorIcons} />
        <IonLabel>
          <h2>Actualizar</h2>
        </IonLabel>
      </IonItem>
      <IonItem routerLink={`${option}/find`}>
        <IonIcon icon="eye" color={colorIcons} />
        <IonLabel>
          <h2>Ver información</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default AdminOptions
