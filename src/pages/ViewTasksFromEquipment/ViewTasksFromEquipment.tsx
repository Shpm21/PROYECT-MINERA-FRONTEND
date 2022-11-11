import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Equipment, getEquipment } from '../../data/equipment'
import { changeDoneStatus, getTasks, Task } from '../../data/task'
import './ViewTasksFromEquipment.css'

const ViewTasksFromEquipment: React.FC = () => {
  const params = useParams<{ id: string }>()
  const [equipment, setEquipment] = useState<Equipment>()
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [changeColor, setChangeColor] = useState<boolean>(false)

  useIonViewWillEnter(() => {
    setIsLoading(true)
    const equipment = getEquipment(parseInt(params.id, 10))
    setEquipment(equipment)
    const t = getTasks()
    setTasks(t)
    setIsLoading(false)
    //checkbox-outline
  })

  useEffect(() => {
    const t = getTasks()
    setTasks(t)
  }, [changeColor])

  const changeStatusTask = (task: Task) => {
    changeDoneStatus(task.id)
    setTasks(getTasks())
    setChangeColor(!changeColor)
  }

  return (
    <IonPage id="view-equipment-maintainer-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/man"
              icon="chevron-back-outline"
            ></IonBackButton>
          </IonButtons>
          <h6>Equipamiento {params.id}</h6>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {!isLoading ? (
          equipment ? (
            tasks ? (
              <>
                {tasks.map((task) => (
                  // <IonItem routerLink={`/task/${task.id}`}>
                  <IonItem lines="none">
                    <IonButton
                      slot="start"
                      class="view-tasks-button"
                      color={task.done ? 'success' : 'danger'}
                      onClick={() => {
                        changeStatusTask(task)
                      }}
                    >
                      <IonIcon
                        icon="checkbox-outline"
                        class="view-tasks-icon"
                      />
                    </IonButton>
                    <IonLabel className="ion-text-wrap">
                      <h3>{task.description}</h3>
                    </IonLabel>
                  </IonItem>
                ))}
              </>
            ) : (
              <div>No hay tareas asignadas para este equipamiento</div>
            )
          ) : (
            <div>Item no encontrado</div>
          )
        ) : (
          <div>Cargando...</div>
        )}
      </IonContent>
      <IonButton expand="full">Subir evidencia</IonButton>
    </IonPage>
  )
}

export default ViewTasksFromEquipment
