import { IonButton, IonInput, IonItem } from '@ionic/react'
import { useState } from 'react'
import '../../../../theme/error.css'
import InformationMessage from '../../../common/InformationMessage'
import { ApiServices } from '../../../../services/ApiServices'

const apiService = ApiServices.getInstance()

const FormType: React.FC = () => {
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const enableButtonCondition = () => {
    return id && description
  }

  const handleButton = async () => {
    try {
      const response = await apiService.add('types', {
        id: id,
        description: description
      })
      if (response) {
        setMessage('Item añadido')
        setId('')
        setDescription('')
        setTimeout(() => {
          setMessage('')
        }, 3000)
      }
    } catch (error) {
      setError(true)
      setMessage('Error al añadir el item')
      setTimeout(() => {
        setError(false)
        setMessage('')
      }, 3000)
    }
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
          value={id}
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
          value={description}
          required
        ></IonInput>
      </IonItem>
      <IonButton disabled={!enableButtonCondition()} onClick={handleButton}>
        Añadir
      </IonButton>
      {error && (
        <InformationMessage message={message} className="error-container" />
      )}
      {!error && message && (
        <InformationMessage message={message} className="success-container" />
      )}
    </>
  )
}

export default FormType
