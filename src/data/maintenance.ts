import { Maintenance } from "../config/interface-templates";

const maintenances: Maintenance[] = [
  {
    rut: '3333',
    idEquipment: 1,
    date: "23/11/2022",
    done: false
  },
  {
    rut: '3333',
    idEquipment: 2,
    date: "23/12/2022",
    done: false
  },
  {
    rut: '4444',
    idEquipment: 3,
    date: "23/11/2022",
    done: false
  }
]

export const getMaintenances = () => maintenances;

export const getMaintenance = (rut: string, idEquipment: number) => maintenances.find(m => m.rut === rut && m.idEquipment === idEquipment);