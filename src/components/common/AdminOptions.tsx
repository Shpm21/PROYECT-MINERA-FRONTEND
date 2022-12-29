import { IonButton } from '@ionic/react'
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
    icon: 'color-wand',
    action: 'edit'
  },
  {
    text: 'Ver Información',
    icon: 'information-circle',
    action: 'info'
  },
  {
    text: 'Carga masiva',
    icon: 'cloud-upload',
    action: 'upload'
  }
]

const AdminOptions: React.FC<Props> = ({
  option,
}) => {
  return (
    <>
      <div className="options-container">
        {settings.map((setting, index) => (
          <AdminOption
            key={index}
            option={option}
            text={setting.text}
            icon={setting.icon}
            action={setting.action}
          />
        ))}
      </div>
    </>
  )
}

export default AdminOptions
