import { IonItem, IonLabel } from '@ionic/react'
import { User } from '../../../../data/user'

interface Props {
  user: User
}

const ShowUserInformation: React.FC<Props> = (Props) => {
  const { rut, mail, name, lastName, secondLastName, id_role, id_zone } =
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
          <h2>Correo: {mail}</h2>
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
            Apellidos: {lastName} {secondLastName}
          </h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Rol: {id_role}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Zona: {id_zone}</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default ShowUserInformation
