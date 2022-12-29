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
import AdminOptions from './AdminOptions'
import { useParams } from 'react-router'
import { getOptionPage } from '../../config/config'

const OptionsPage: React.FC = () => {
  const { option } = useParams<{ option: string }>()
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete()
    }, 3000)
  }
  return (
    <IonPage id="category-options-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" icon="chevron-back-outline" />
          </IonButtons>
          <h6>{getOptionPage(option)}</h6>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <AdminOptions option={option} />
      </IonContent>
    </IonPage>
  )
}

export default OptionsPage
