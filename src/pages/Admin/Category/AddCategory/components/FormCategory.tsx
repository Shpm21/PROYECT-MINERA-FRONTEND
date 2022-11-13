import {
  IonItem,
  IonInput,
  useIonViewWillEnter,
  IonSelect,
  IonSelectOption,
  IonButton
} from '@ionic/react'
import { useState } from 'react'
import {
  MaintenanceGuideline,
  getMaintenanceGuidelines
} from '../../../../../data/maintenanceGuideline'

const FormCategory: React.FC = () => {
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [idMaintenanceG, setIdMaintenanceG] = useState('')
  const [maintenanceGuidelines, setMaintenanceGuidelines] = useState<
    MaintenanceGuideline[]
  >([])

  const enableButtonCondition = () => {
    return id && description && idMaintenanceG
  }

  useIonViewWillEnter(() => {
    const getMaintenanceGs = () => {
      const mg = getMaintenanceGuidelines()
      setMaintenanceGuidelines(mg)
    }

    getMaintenanceGs()
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
        <IonSelect
          placeholder="Seleccione una guía de mantenimiento"
          interface="popover"
          onIonChange={(ev) => {
            setIdMaintenanceG(ev.detail.value!)
          }}
        >
          {maintenanceGuidelines.map((mg) => {
            return (
              <IonSelectOption value={mg.id}>{mg.description}</IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
      <IonButton disabled={!enableButtonCondition()}>Añadir</IonButton>
    </>
  )
}

export default FormCategory
