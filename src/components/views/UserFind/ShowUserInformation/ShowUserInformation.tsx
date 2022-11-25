import { IonItem, IonLabel } from '@ionic/react'
import { User } from '../../../../config/interface-templates'

interface Props {
  user: User
}

const ShowUserInformation: React.FC<Props> = (Props) => {
  const { rut, email, name, lastname, secondLastname, idRole, idZone } =
    Props.user

  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>Rut: {rut}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Correo: {email}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Nombre: {name}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>
            Apellidos: {lastname} {secondLastname}
          </h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Rol: {idRole}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Zona: {idZone}</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default ShowUserInformation
