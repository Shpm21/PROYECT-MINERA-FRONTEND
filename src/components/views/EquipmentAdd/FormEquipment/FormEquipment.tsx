import {
  IonButton,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import { Category, getCategories } from '../../../../data/category'
import { Location, getLocations } from '../../../../data/location'
import { getTypes, Type } from '../../../../data/type'

const FormEquipment: React.FC = () => {
  const [id, setId] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [movility, setMovility] = useState<boolean>()
  const [type, setType] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const [types, setTypes] = useState<Type[]>([])
  const [categorys, setCategorys] = useState<Category[]>([])
  const [locations, setLocations] = useState<Location[]>([])

  const enableButtonCondition = () => {
    return id && description && movility && type && category && location
  }

  useIonViewWillEnter(() => {
    const getCategoriess = () => {
      const c = getCategories()
      setCategorys(c)
    }

    const getTypess = () => {
      const t = getTypes()
      setTypes(t)
    }

    const getLocationss = () => {
      const l = getLocations()
      setLocations(l)
    }

    getCategoriess()
    getTypess()
    getLocationss()
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
          placeholder="Fijo"
          interface="popover"
          onIonChange={(ev) => {
            setMovility(ev.detail.value!)
          }}
        >
          <IonSelectOption value={true}>Si</IonSelectOption>
          <IonSelectOption value={true}>No</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Categoría"
          interface="popover"
          onIonChange={(ev) => {
            setCategory(ev.detail.value!)
          }}
        >
          {categorys.map((c) => (
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
        >
          {locations.map((l) => (
            <IonSelectOption value={l.id}>
              {l.latitude}, {l.longitude}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonButton disabled={!enableButtonCondition()}>Añadir</IonButton>
    </>
  )
}

export default FormEquipment
