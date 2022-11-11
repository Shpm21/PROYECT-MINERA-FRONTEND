export interface Equipment {
  id: number;
  description: string;
  movility: boolean;
  idCategory: number;
  idType: number;
  idLocation: number;
}

const equipments: Equipment[] = [
  {
    id: 1,
    description: 'Equipo 1',
    movility: true,
    idCategory: 1,
    idType: 1,
    idLocation: 1
  },
  {
    id: 2,
    description: 'Equipo 2',
    movility: false,
    idCategory: 2,
    idType: 2,
    idLocation: 2
  },
  {
    id: 3,
    description: 'Equipo 3',
    movility: true,
    idCategory: 3,
    idType: 3,
    idLocation: 3
  },
  {
    id: 4,
    description: 'Equipo 4',
    movility: false,
    idCategory: 4,
    idType: 4,
    idLocation: 4
  }
]

export const getEquipments = () => equipments;

export const getEquipment = (id: number) => equipments.find(r => r.id === id);