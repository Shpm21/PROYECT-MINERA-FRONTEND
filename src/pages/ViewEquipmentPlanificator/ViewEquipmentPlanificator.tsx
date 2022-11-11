import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { getCategory } from '../../data/category'
import { Equipment, getEquipment } from '../../data/equipment'
import { getType } from '../../data/type'
import ViewUser from './components/ViewUser'

const ViewEquipmentPlanificator: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment>()
  const params = useParams<{ id: string }>()
  const [category, setCategory] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [type, setType] = useState<string>()

  useIonViewWillEnter(() => {
    setIsLoading(true)
    const equipment = getEquipment(parseInt(params.id, 10))
    setEquipment(equipment)
    const getCategoryById = async () => {
      const c = getCategory(equipment!.idCategory)
      setCategory(c?.description)
    }

    const getTypeById = async () => {
      const t = getType(equipment!.idType)
      setType(t?.description)
    }
    getCategoryById()
    getTypeById()
    setIsLoading(false)
  })
  return (
    <IonPage id="view-equipment-planificator-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/pla"
              icon="chevron-back-outline"
            ></IonBackButton>
          </IonButtons>
          <h6>Equipamiento {params.id}</h6>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {!isLoading ? (
          equipment ? (
            <>
              <IonItem>
                <IonLabel>
                  <h2>ID: {equipment.id}</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Descripción: {equipment.description}</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Fijo: {equipment.movility ? 'Si' : 'No'}</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Categoría: {category}</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Tipo: {type}</h2>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Localización: {equipment.idLocation}</h2>
                </IonLabel>
              </IonItem>
              <IonItem class="label-item">
                <IonLabel class="label-equipment">
                  <h2>Mantenedores Disponibles</h2>
                </IonLabel>
              </IonItem>
              <ViewUser />
            </>
          ) : (
            <div>Item no encontrado</div>
          )
        ) : (
          <div>Cargando...</div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default ViewEquipmentPlanificator
