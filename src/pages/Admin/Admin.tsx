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
import OptionCard from './components/OptionCard'

const options = [
  'equipments',
  'users',
  'maintainers',
  'types',
  'categories',
  'locations'
]
const Admin: React.FC = () => {
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }

  return (
    <IonPage id="admin-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" icon="exit-outline" />
          </IonButtons>
          <h6>Administración</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {options.map((option, index) => (
          <OptionCard option={option} index={index} />
        ))}
      </IonContent>
    </IonPage>
  )
}

export default Admin
