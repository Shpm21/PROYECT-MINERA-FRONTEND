export interface Location {
  id: number;
  latitude: number;
  longitude: number;
  idZone: number;
}

const locations: Location[] = [
  {
    id: 1,
    latitude: -33.4569400,
    longitude: -70.6482700,
    idZone: 1
  },
  {
    id: 2,
    latitude: -23.4569400,
    longitude: -70.6482700,
    idZone: 2
  },
  {
    id: 3,
    latitude: -13.4569400,
    longitude: -70.6482700,
    idZone: 3
  },
  {
    id: 4,
    latitude: -33.4569400,
    longitude: -30.6482700,
    idZone: 1
  },
  {
    id: 5,
    latitude: -23.4569400,
    longitude: -20.6482700,
    idZone: 2
  },
]

export const getLocations = () => locations;

export const getLocation = (id: number) => locations.find(l => l.id === id);