import { IonItem, IonLabel } from '@ionic/react'
import { Location } from '../../../../data/location'

interface Props {
  location: Location
}

const ShowLocationInformacion: React.FC<Props> = (Props) => {
  const { id, latitude, longitude, idZone } = Props.location

  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>ID: {id}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Latitud: {latitude}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Longitud: {longitude}</h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>ID Zona: {idZone}</h2>
        </IonLabel>
      </IonItem>
    </>
  )
}

export default ShowLocationInformacion
