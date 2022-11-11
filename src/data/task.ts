export interface Task {
  id: number;
  description: string;
  done: boolean;
  idMaintenanceG: number;
}

const tasks: Task[] = [
  {
    id: 1,
    description: 'Tarea 1',
    done: false,
    idMaintenanceG: 1
  },
  {
    id: 2,
    description: 'Tarea 2',
    done: false,
    idMaintenanceG: 2
  },
  {
    id: 3,
    description: 'Tarea 3',
    done: false,
    idMaintenanceG: 3
  }
]