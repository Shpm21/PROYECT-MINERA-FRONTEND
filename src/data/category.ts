export interface Category {
  id: number;
  description: string;
  idMaintenanceG: number;
}

const categories: Category[] = [
  {
    id: 1,
    description: 'Categoría 1',
    idMaintenanceG: 1
  },
  {
    id: 2,
    description: 'Categoría 2',
    idMaintenanceG: 2
  },
  {
    id: 3,
    description: 'Categoría 3',
    idMaintenanceG: 3
  }
]

export const getCategories = () => categories;

export const getCategory = (id: number) => categories.find(c => c.id === id);