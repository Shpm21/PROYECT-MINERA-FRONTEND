import {
  IonButton,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import { Zone } from '../../../../config/interface-templates'
import { getZones } from '../../../../data/zones'

const FormLocation: React.FC = () => {
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [idZone, setIdZone] = useState('')
  const [zones, setZones] = useState<Zone[]>([])

  const enableButtonCondition = () => {
    return id && latitude && longitude && idZone && description
  }

  useIonViewWillEnter(() => {
    const getZoness = () => {
      const z = getZones()
      setZones(z)
    }

    getZones()
  })

  return (
    <>
      <IonItem>
        <IonInput
          placeholder="ID"
          type="text"
          onIonChange={(ev) => {
            setId(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Descripción"
          type="text"
          onIonChange={(ev) => {
            setDescription(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Latitud"
          type="text"
          onIonChange={(ev) => {
            setLatitude(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Longitud"
          type="text"
          onIonChange={(ev) => {
            setLongitude(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Seleccione una zona"
          interface="popover"
          onIonChange={(ev) => {
            setIdZone(ev.detail.value!)
          }}
        >
          {zones.map((z) => {
            return (
              <IonSelectOption key={z.id} value={z.id}>
                {z.description}
              </IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
      <IonButton disabled={!enableButtonCondition()}>Añadir</IonButton>
    </>
  )
}

export default FormLocation
