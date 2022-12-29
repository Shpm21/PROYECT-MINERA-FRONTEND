import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar
} from '@ionic/react'
import { useParams } from 'react-router'
import FormCategory from '../views/CategoryAdd/FormCategory/FormCategory'
import FormEquipment from '../views/EquipmentAdd/FormEquipment/FormEquipment'
import { getAddPage } from '../../config/config'
import FormUser from '../views/UserAdd/FormUser/FormUser'
import FormType from '../views/TypeAdd/FormType/FormType'
import FormLocation from '../views/LocationAdd/FormLocation/FormLocation'

// equipments: 'Opciones de equipos',
// users: 'Opciones de usuarios',
// maintenance: 'Opciones de mantenimiento',
// types: 'Opciones de tipos',
// categories: 'Opciones de categorias',
// locations: 'Opciones de ubicaciones'
const sortFormByOption = (option: string) => {
  switch (option) {
    case 'categories':
      return <FormCategory />
    case 'equipments':
      return <FormEquipment />
    case 'users':
      return <FormUser />
    case 'maintenance':
      return <>Maintenance</>
    case 'types':
      return <FormType />
    case 'locations':
      return <FormLocation />
    default:
      return <>NotFound</>
  }
}

const AddPage: React.FC = () => {
  const { option } = useParams<{ option: string }>()
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="admin-add-category-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref={`/admin/${option}/`}
              icon="chevron-back-outline"
            />
          </IonButtons>
          <h6>{getAddPage(option)}</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {sortFormByOption(option)}
      </IonContent>
    </IonPage>
  )
}

export default AddPage
