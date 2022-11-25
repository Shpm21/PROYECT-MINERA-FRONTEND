import { Role } from "../config/interface-templates";

const roles: Role[] = [
  {
    id: 1,
    description: 'Administrador'
  },
  {
    id: 2,
    description: 'Planificador',
  },
  {
    id: 3,
    description: 'Mantenedor',
  },
]

export const getRoles = () => roles;

export const getRole = (id: number) => roles.find(r => r.id === id);