import { MaintenanceGuideline } from "../config/interface-templates";


const maintenanceGuidelines: MaintenanceGuideline[] = [
  {
    id: 1,
    description: 'Guía de Mantención 1',
    frequency: 1
  },
  {
    id: 2,
    description: 'Guía de Mantención 2',
    frequency: 2
  },
  {
    id: 3,
    description: 'Guía de Mantención 3',
    frequency: 3
  }
]

export const getMaintenanceGuidelines = () => maintenanceGuidelines;

export const getMaintenanceGuideline = (id: number) => maintenanceGuidelines.find(m => m.id === id);