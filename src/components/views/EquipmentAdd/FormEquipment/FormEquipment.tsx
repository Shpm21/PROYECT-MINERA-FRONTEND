import {
  IonButton,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import {
  Category,
  Location,
  Type
} from '../../../../config/interface-templates'
import InformationMessage from '../../../common/InformationMessage'
import { ApiServices } from '../../../../services/ApiServices'

const apiServices = ApiServices.getInstance()

const FormEquipment: React.FC = () => {
  const [id, setId] = useState<number>()
  const [description, setDescription] = useState<string>('')
  const [movility, setMovility] = useState<boolean>(false)
  const [type, setType] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const [types, setTypes] = useState<Type[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [locations, setLocations] = useState<Location[]>([])

  const [error, setError] = useState(false)
  const [errormessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [successmessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const enableButtonCondition = () => {
    return id && description && type && category && location
  }

  const handleButton = async () => {
    try {
      if (enableButtonCondition()) {
        const response = await apiServices.add('equipments', {
          id: id,
          description: description,
          movility: movility,
          id_category: category,
          id_type: type,
          id_location: location
        })
        if (response) {
          setSuccess(true)
          setSuccessMessage('Item añadido')
          setId(0)
          setDescription('')
          setMovility(false)
          setType('')
          setCategory('')
          setLocation('')
          setTimeout(() => {
            setSuccess(false)
            setSuccessMessage('')
          }, 3000)
        }
      }
    } catch (error: any) {
      setError(true)
      setErrorMessage('Error al añadir el item')
      setTimeout(() => {
        setError(false)
        setErrorMessage('')
      }, 3000)
    }
  }

  useIonViewWillEnter(() => {
    setLoading(true)
    const fetchCategories = async () => {
      const c = await apiServices.get('categories')
      setCategories(c)
    }

    const fetchTypes = async () => {
      const t = await apiServices.get('types')
      setTypes(t)
    }

    const fetchLocations = async () => {
      const l = await apiServices.get('locations')
      setLocations(l)
    }

    fetchCategories()
    fetchTypes()
    fetchLocations()
    setLoading(false)
  })
  return (
    <>
      <IonItem>
        <IonInput
          placeholder="ID"
          type="number"
          onIonChange={(ev) => {
            setId(parseInt(ev.detail.value!))
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
          required
          value={description}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Fijo"
          interface="popover"
          onIonChange={(ev) => {
            setMovility(ev.detail.value!)
          }}
          value={movility}
        >
          <IonSelectOption value={true}>Si</IonSelectOption>
          <IonSelectOption value={false}>No</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Categoría"
          interface="popover"
          onIonChange={(ev) => {
            setCategory(ev.detail.value!)
          }}
          value={category}
        >
          {categories.map((c) => (
            <IonSelectOption value={c.id}>{c.description}</IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Tipo"
          interface="popover"
          onIonChange={(ev) => {
            setType(ev.detail.value!)
          }}
          value={type}
        >
          {types.map((t) => (
            <IonSelectOption value={t.id}>{t.description}</IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Ubicación"
          interface="popover"
          onIonChange={(ev) => {
            setLocation(ev.detail.value!)
          }}
          value={location}
        >
          {locations.map((l) => (
            <IonSelectOption value={l.id}>
              {l.latitude}, {l.longitude}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonButton disabled={!enableButtonCondition()} onClick={handleButton}>
        Añadir
      </IonButton>

      {error && (
        <InformationMessage
          message={errormessage}
          className="error-container"
        />
      )}
      {success && (
        <InformationMessage
          message={successmessage}
          className="success-container"
        />
      )}
    </>
  )
}

export default FormEquipment
