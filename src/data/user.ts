export interface User {
  rut: string;
  password: string;
  mail: string;
  name: string;
  lastName: string;
  secondLastName: string;
  id_role: number;
  id_zone: number;
}

const users: User[] = [
  {
    rut: '1111',
    password: '1111',
    mail: '1111',
    name: 'Abigail',
    lastName: '1111',
    secondLastName: '1111',
    id_role: 1,
    id_zone: 1
  },
  {
    rut: '2222',
    password: '2222',
    mail: '2222',
    name: 'Juan',
    lastName: '2222',
    secondLastName: '2222',
    id_role: 2,
    id_zone: 2
  },
  {
    rut: '3333',
    password: '3333',
    mail: '3333',
    name: 'Miguel',
    lastName: '3333',
    secondLastName: '3333',
    id_role: 3,
    id_zone: 3
  },
  {
    rut: '4444',
    password: '4444',
    mail: '4444',
    name: 'Pedro',
    lastName: '4444',
    secondLastName: '4444',
    id_role: 3,
    id_zone: 2
  },
  {
    rut: '5555',
    password: '5555',
    mail: '5555',
    name: 'Patricio',
    lastName: '5555',
    secondLastName: '5555',
    id_role: 2,
    id_zone: 2
  },
]

export const getUsers = () => users;

export const getUser = (rut: string) => users.find(u => u.rut === rut);
