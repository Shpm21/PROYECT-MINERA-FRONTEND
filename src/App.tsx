import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewMessage from './pages/ViewMessage'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/* Theme variables */
import Admin from './components/views/Admin/Admin'
import CategoryAdd from './components/views/CategoryAdd/CategoryAdd'
import CategoryDelete from './components/views/CategoryDelete/CategoryDelete'
import CategoryFind from './components/views/CategoryFind/CategoryFind'
import CategoryOptions from './components/views/CategoryOptions/CategoryOptions'
import EquipmentAdd from './components/views/EquipmentAdd/EquipmentAdd'
import EquipmentDelete from './components/views/EquipmentDelete/EquipmentDelete'
import EquipmentFind from './components/views/EquipmentFind/EquipmentFind'
import EquipmentOptions from './components/views/EquipmentOptions/EquipmentOptions'
import LocationAdd from './components/views/LocationAdd/LocationAdd'
import LocationDelete from './components/views/LocationDelete/LocationDelete'
import LocationFind from './components/views/LocationFind/LocationFind'
import LocationOptions from './components/views/LocationOptions/LocationOptions'
import Login from './components/views/Login/Login'
import Maintainer from './components/views/Maintainer/Maintainer'
import Planificator from './components/views/Planificator/Planificator'
import TypeAdd from './components/views/TypeAdd/TypeAdd'
import TypeDelete from './components/views/TypeDelete/TypeDelete'
import TypeFind from './components/views/TypeFind/TypeFind'
import TypeOptions from './components/views/TypeOptions/TypeOptions'
import UploadCsv from './components/views/UploadCsv/UploadCsv'
import UserAdd from './components/views/UserAdd/UserAdd'
import UserDelete from './components/views/UserDelete/UserDelete'
import UserFind from './components/views/UserFind/UserFind'
import UserOptions from './components/views/UserOptions/UserOptions'
import ViewEquipmentPlanificator from './components/views/ViewEquipmentPlanificator/ViewEquipmentPlanificator'
import ViewTasksFromEquipment from './components/views/ViewTasksFromEquipment/ViewTasksFromEquipment'
import './theme/variables.css'

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
        <Route path="/message/:id" exact={true}>
          <ViewMessage />
        </Route>
        <Route path="/login" exact={true} component={Login} />
        <Route
          path="/equipment_planificator/:id"
          exact={true}
          component={ViewEquipmentPlanificator}
        />

        <Route
          path="/equipment_tasks/:id"
          exact={true}
          component={ViewTasksFromEquipment}
        />
        <Route path="/pla" exact={true} component={Planificator} />
        <Route path="/man" exact={true} component={Maintainer} />
        <Route path="/upload" exact={true} component={UploadCsv} />
        {/* admin  */}
        <Route path="/admin" component={Admin} />

        {/* admin equipment */}
        <Route exact={true} path="/equipments" component={EquipmentOptions} />
        <Route exact={true} path="/equipments/add" component={EquipmentAdd} />
        <Route
          exact={true}
          path="/equipments/delete"
          component={EquipmentDelete}
        />
        <Route exact={true} path="/equipments/info" component={EquipmentFind} />
        {/* upload route */}
        <Route exact={true} path="/equipments/upload" component={UploadCsv} />

        {/* admin user */}
        <Route exact={true} path="/users" component={UserOptions} />
        <Route exact={true} path="/users/add" component={UserAdd} />
        <Route exact={true} path="/users/delete" component={UserDelete} />
        <Route exact={true} path="/users/info" component={UserFind} />

        {/* admin type */}
        <Route exact={true} path="/types" component={TypeOptions} />
        <Route exact={true} path="/types/add" component={TypeAdd} />
        <Route exact={true} path="/types/delete" component={TypeDelete} />
        <Route exact={true} path="/types/info" component={TypeFind} />

        {/* admin categories */}
        <Route exact={true} path="/categories" component={CategoryOptions} />
        <Route exact={true} path="/categories/add" component={CategoryAdd} />
        <Route
          exact={true}
          path="/categories/delete"
          component={CategoryDelete}
        />
        <Route exact={true} path="/categories/info" component={CategoryFind} />

        {/* admin locations */}
        <Route exact={true} path="/locations" component={LocationOptions} />
        <Route exact={true} path="/locations/add" component={LocationAdd} />
        <Route
          exact={true}
          path="/locations/delete"
          component={LocationDelete}
        />
        <Route exact={true} path="/locations/info" component={LocationFind} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
