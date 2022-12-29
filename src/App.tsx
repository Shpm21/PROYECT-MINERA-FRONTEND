import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'

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
import CategoryDelete from './components/views/CategoryDelete/CategoryDelete'
import CategoryFind from './components/views/CategoryFind/CategoryFind'
import EquipmentDelete from './components/views/EquipmentDelete/EquipmentDelete'
import EquipmentFind from './components/views/EquipmentFind/EquipmentFind'
import LocationDelete from './components/views/LocationDelete/LocationDelete'
import LocationFind from './components/views/LocationFind/LocationFind'
import Login from './components/views/Login/Login'
import Maintainer from './components/views/Maintainer/Maintainer'
import Planificator from './components/views/Planificator/Planificator'
import TypeFind from './components/views/TypeFind/TypeFind'
import UploadCsv from './components/views/UploadCsv/UploadCsv'
import UserDelete from './components/views/UserDelete/UserDelete'
import UserFind from './components/views/UserFind/UserFind'
import ViewEquipmentPlanificator from './components/views/ViewEquipmentPlanificator/ViewEquipmentPlanificator'
import ViewTasksFromEquipment from './components/views/ViewTasksFromEquipment/ViewTasksFromEquipment'
import './theme/variables.css'
import PrivateRouteAdmin from './auth/PrivateRouteAdmin'
import OptionsPage from './components/common/OptionsPage'
import AddPage from './components/common/AddPage'
import TypeDelete from './components/views/TypeDelete/TypeDelete'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route
          path="/equipment_planificator/:id"
          component={ViewEquipmentPlanificator}
        />

        <Route path="/equipment_tasks/:id" component={ViewTasksFromEquipment} />

        <Route path="/pla" component={Planificator} />
        <Route path="/man" component={Maintainer} />
        <Route path="/upload" component={UploadCsv} />

        {/* admin  */}
        <PrivateRouteAdmin path="/admin/" component={Admin} />
        <PrivateRouteAdmin path="/admin/:option" component={OptionsPage} />
        <PrivateRouteAdmin path="/admin/:option/add" component={AddPage} />
        {/* admin equipment */}
        <PrivateRouteAdmin
          path="/equipments/delete"
          component={EquipmentDelete}
        />
        <PrivateRouteAdmin path="/equipments/info" component={EquipmentFind} />
        {/* upload route */}
        <PrivateRouteAdmin path="/equipments/upload" component={UploadCsv} />

        {/* admin user */}
        <PrivateRouteAdmin path="/users/delete" component={UserDelete} />
        <PrivateRouteAdmin path="/users/info" component={UserFind} />

        {/* admin type */}
        <PrivateRouteAdmin path="/types/delete" component={TypeDelete} />
        <PrivateRouteAdmin path="/types/info" component={TypeFind} />

        {/* admin categories */}
        <PrivateRouteAdmin
          path="/categories/delete"
          component={CategoryDelete}
        />
        <PrivateRouteAdmin path="/categories/info" component={CategoryFind} />

        {/* admin locations */}
        <PrivateRouteAdmin
          path="/locations/delete"
          component={LocationDelete}
        />
        <PrivateRouteAdmin path="/locations/info" component={LocationFind} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
