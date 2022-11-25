import { Location } from "../config/interface-templates";


const locations: Location[] = [
  {
    id: 1,
    description: 'Sala de Computación',
    latitude: -33.4569400,
    longitude: -70.6482700,
    idZone: 1
  },
  {
    id: 2,
    description: 'Sala de Profesores',
    latitude: -23.4569400,
    longitude: -70.6482700,
    idZone: 2
  },
  {
    id: 3,
    description: 'Sala de Estudiantes',
    latitude: -13.4569400,
    longitude: -70.6482700,
    idZone: 3
  },
  {
    id: 4,
    description: 'Sala de Administración',
    latitude: -33.4569400,
    longitude: -30.6482700,
    idZone: 1
  },
  {
    id: 5,
    description: 'Sala de Profesores',
    latitude: -23.4569400,
    longitude: -20.6482700,
    idZone: 2
  },
]

export const getLocations = () => locations;

export const getLocation = (id: number) => locations.find(l => l.id === id);