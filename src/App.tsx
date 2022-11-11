import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import ViewMessage from './pages/ViewMessage'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import Login from './pages/Login/Login'
import Planificator from './pages/Planificator/Planificator'
import ViewEquipmentPlanificator from './pages/ViewEquipmentPlanificator/ViewEquipmentPlanificator'
import Maintainer from './pages/Maintainer/Maintainer'
import ViewTasksFromEquipment from './pages/ViewTasksFromEquipment/ViewTasksFromEquipment'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/login" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/message/:id">
          <ViewMessage />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/equipment_planificator/:id">
          <ViewEquipmentPlanificator />
        </Route>
        <Route path="/equipment_tasks/:id">
          <ViewTasksFromEquipment />
        </Route>
        <Route path="/pla">
          <Planificator />
        </Route>
        <Route path="/man">
          <Maintainer />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
