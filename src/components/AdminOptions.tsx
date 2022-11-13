import { IonIcon, IonItem, IonLabel } from '@ionic/react'
import AdminOption from './AdminOption'
import './AdminOptions.css'

interface Props {
  option: string
}

interface Setting {
  text: string
  icon: string
  action: string
}

const settings: Setting[] = [
  {
    text: 'Agregar',
    icon: 'add-circle',
    action: 'add'
  },
  {
    text: 'Eliminar',
    icon: 'close-circle',
    action: 'delete'
  },
  {
    text: 'Editar',
    icon: 'pencil',
    action: 'edit'
  },
  {
    text: 'Ver Información',
    icon: 'eye',
    action: 'info'
  }
]

const AdminOptions: React.FC<Props> = ({ option }) => {
  return (
    <>
      {settings.map((setting, index) => (
        <AdminOption
          key={index}
          option={option}
          text={setting.text}
          icon={setting.icon}
          action={setting.action}
        />
      ))}
    </>
  )
}

export default AdminOptions
