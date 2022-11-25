import { Zone } from "../config/interface-templates";

const zones: Zone[] = [
  {
    id: 1,
    description: 'Zona 1',
    latitude: -33.4569400,
    longitude: -70.6482700
  },
  {
    id: 2,
    description: 'Zona 2',
    latitude: -23.4569400,
    longitude: -70.6482700
  },
  {
    id: 3,
    description: 'Zona 3',
    latitude: -13.4569400,
    longitude: -70.6482700
  }
]

export const getZones = () => zones;

export const getZone = (id: number) => zones.find(z => z.id === id);