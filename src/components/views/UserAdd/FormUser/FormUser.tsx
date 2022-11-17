import {
  IonButton,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import { getRoles, Role } from '../../../../data/role'
import { getZones, Zone } from '../../../../data/zones'

const FormUser: React.FC = () => {
  const [rut, setRut] = useState('')
  const [password, setPassword] = useState('')
  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [secondLastName, setSecondLastName] = useState('')
  const [idRole, setIdRole] = useState('')
  const [idZone, setIdZone] = useState('')

  const [roles, setRoles] = useState<Role[]>([])
  const [zones, setZones] = useState<Zone[]>([])

  const enableButtonCondition = () =>
    rut &&
    password &&
    mail &&
    name &&
    lastName &&
    secondLastName &&
    idRole &&
    idZone

  useIonViewWillEnter(() => {
    const getRoless = () => {
      const r = getRoles()
      setRoles(r)
    }

    const getZoness = () => {
      const z = getZones()
      setZones(z)
    }

    getRoless()
    getZoness()
  })
  return (
    <>
      <IonItem>
        <IonInput
          placeholder="Rut"
          type="text"
          onIonChange={(ev) => {
            setRut(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Nombre"
          type="text"
          onIonChange={(ev) => {
            setName(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Primer Apellido"
          type="text"
          onIonChange={(ev) => {
            setLastName(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Segundo Apellido"
          type="text"
          onIonChange={(ev) => {
            setSecondLastName(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Correo electronico"
          type="text"
          onIonChange={(ev) => {
            setMail(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonInput
          placeholder="Contraseña"
          type="text"
          onIonChange={(ev) => {
            setPassword(ev.detail.value!)
          }}
          required
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Rol"
          onIonChange={(ev) => {
            setIdRole(ev.detail.value!)
          }}
        >
          {roles.map((role) => (
            <IonSelectOption key={role.id} value={role.id}>
              {role.description}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonSelect
          placeholder="Zona"
          onIonChange={(ev) => {
            setIdZone(ev.detail.value!)
          }}
        >
          {zones.map((zone) => (
            <IonSelectOption key={zone.id} value={zone.id}>
              {zone.description}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonButton disabled={!enableButtonCondition()}>Añadir</IonButton>
    </>
  )
}

export default FormUser
