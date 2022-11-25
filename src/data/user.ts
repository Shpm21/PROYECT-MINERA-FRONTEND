import { User } from "../config/interface-templates";


const users: User[] = [
  {
    rut: '1111',
    password: '1111',
    email: '1111',
    name: 'Abigail',
    lastname: '1111',
    secondLastname: '1111',
    idRole: 1,
    idZone: 1
  },
  {
    rut: '2222',
    password: '2222',
    email: '2222',
    name: 'Juan',
    lastname: '2222',
    secondLastname: '2222',
    idRole: 2,
    idZone: 2
  },
  {
    rut: '3333',
    password: '3333',
    email: '3333',
    name: 'Miguel',
    lastname: '3333',
    secondLastname: '3333',
    idRole: 3,
    idZone: 3
  },
  {
    rut: '4444',
    password: '4444',
    email: '4444',
    name: 'Pedro',
    lastname: '4444',
    secondLastname: '4444',
    idRole: 3,
    idZone: 2
  },
  {
    rut: '5555',
    password: '5555',
    email: '5555',
    name: 'Patricio',
    lastname: '5555',
    secondLastname: '5555',
    idRole: 2,
    idZone: 2
  },
]

export const getUsers = () => users;

export const getUser = (rut: string) => users.find(u => u.rut === rut);
