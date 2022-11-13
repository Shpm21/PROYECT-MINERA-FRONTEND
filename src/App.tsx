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
import UploadCsv from './pages/UploadCsv/UploadCsv'
import Admin from './pages/Admin/Admin'
import AddEquipment from './pages/Admin/Equipment/AddEquipment/AddEquipment'
import DeleteEquipment from './pages/Admin/Equipment/DeleteEquipment/DeleteEquipment'
import FindEquipment from './pages/Admin/Equipment/FindEquipment/FindEquipment'
import EquipmentOptions from './pages/Admin/Equipment/EquipmentOptions/EquipmentOptions'
import UserOptions from './pages/Admin/User/UserOptions/UserOptions'
import AddUser from './pages/Admin/User/AddUser/AddUser'
import DeleteUser from './pages/Admin/User/DeleteUser/DeleteUser'
import FindUser from './pages/Admin/User/FindUser/FindUser'
import AddType from './pages/Admin/Type/AddType/AddType'
import TypeOptions from './pages/Admin/Type/TypeOptions/TypeOptions'
import DeleteType from './pages/Admin/Type/DeleteType/DeleteType'
import FindType from './pages/Admin/Type/FindType/FindType'
import CategoryOptions from './pages/Admin/Category/CategoryOptions/CategoryOptions'
import AddCategory from './pages/Admin/Category/AddCategory/AddCategory'
import DeleteCategory from './pages/Admin/Category/DeleteCategory/DeleteCategory'
import FindCategory from './pages/Admin/Category/FindCategory/FindCategory'
import LocationOptions from './pages/Admin/Location/LocationOptions/LocationOptions'
import AddLocation from './pages/Admin/Location/AddLocation/AddLocation'
import DeleteLocation from './pages/Admin/Location/DeleteLocation/DeleteLocation'
import FindLocation from './pages/Admin/Location/FindLocation/FindLocation'

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
        <Route exact={true} path="/equipments/add" component={AddEquipment} />
        <Route
          exact={true}
          path="/equipments/delete"
          component={DeleteEquipment}
        />
        <Route exact={true} path="/equipments/info" component={FindEquipment} />

        {/* admin user */}
        <Route exact={true} path="/users" component={UserOptions} />
        <Route exact={true} path="/users/add" component={AddUser} />
        <Route exact={true} path="/users/delete" component={DeleteUser} />
        <Route exact={true} path="/users/info" component={FindUser} />

        {/* admin type */}
        <Route exact={true} path="/types" component={TypeOptions} />
        <Route exact={true} path="/types/add" component={AddType} />
        <Route exact={true} path="/types/delete" component={DeleteType} />
        <Route exact={true} path="/types/info" component={FindType} />

        {/* admin categories */}
        <Route exact={true} path="/categories" component={CategoryOptions} />
        <Route exact={true} path="/categories/add" component={AddCategory} />
        <Route
          exact={true}
          path="/categories/delete"
          component={DeleteCategory}
        />
        <Route exact={true} path="/categories/info" component={FindCategory} />

        {/* admin locations */}
        <Route exact={true} path="/locations" component={LocationOptions} />
        <Route exact={true} path="/locations/add" component={AddLocation} />
        <Route
          exact={true}
          path="/locations/delete"
          component={DeleteLocation}
        />
        <Route exact={true} path="/locations/info" component={FindLocation} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
