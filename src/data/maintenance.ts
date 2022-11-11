export interface Maintenance {
  rut: string;
  idEquipment: number;
  maintenanceDate: string;
}

const maintenances: Maintenance[] = [
  {
    rut: '3333',
    idEquipment: 1,
    maintenanceDate: "23/11/2022"
  },
  {
    rut: '3333',
    idEquipment: 2,
    maintenanceDate: "23/12/2022"
  },
  {
    rut: '4444',
    idEquipment: 3,
    maintenanceDate: "23/11/2022"
  }
]

export const getMaintenances = () => maintenances;

export const getMaintenance = (rut: string, idEquipment: number) => maintenances.find(m => m.rut === rut && m.idEquipment === idEquipment);