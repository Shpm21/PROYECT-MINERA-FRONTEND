import { Task } from "../config/interface-templates";

const tasks: Task[] = [
  {
    id: 1,
    description: 'Tarea 1',

    idMaintenanceG: 1
  },
  {
    id: 2,
    description: 'Tarea 2',

    idMaintenanceG: 2
  },
  {
    id: 3,
    description: 'Tarea 3',

    idMaintenanceG: 3
  }
]

export const getTasks = () => tasks;

export const getTask = (id: number) => tasks.find(t => t.id === id);

export const getTasksByIdMaintenanceG = (idMaintenanceG: number) => tasks.filter(t => t.idMaintenanceG === idMaintenanceG);

// export const changeDoneStatus = (id: number) => {
//   const task = getTask(id);
//   if (task) {
//     task.done = !task.done;
//   }
// }