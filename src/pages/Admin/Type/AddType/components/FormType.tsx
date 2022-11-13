import { IonButton, IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'

const FormType: React.FC = () => {
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')

  const enableButtonCondition = () => {
    return id && description
  }

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
      <IonButton disabled={!enableButtonCondition()}>Añadir</IonButton>
    </>
  )
}

export default FormType
