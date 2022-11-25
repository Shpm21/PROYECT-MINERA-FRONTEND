import { Type } from "../config/interface-templates";

const types: Type[] = [
  {
    id: 1,
    description: 'Tipo 1'
  },
  {
    id: 2,
    description: 'Tipo 2'
  },
  {
    id: 3,
    description: 'Tipo 3'
  },
  {
    id: 4,
    description: 'Tipo 4'
  }
]

export const getTypes = () => types;

export const getType = (id: number) => types.find(t => t.id === id);