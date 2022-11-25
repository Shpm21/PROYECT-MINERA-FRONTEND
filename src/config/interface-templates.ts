export interface Role {
  id: number
  description: string
}

export interface Course {
  id: number
  description: string
}

export interface User {
  rut: string
  password: string
  email: string
  name: string
  lastname: string
  secondLastname: string
  idRole: number
  idZone: number
}

export interface Maintenance {
  rut: string
  idEquipment: number
  date: string
  done: boolean
}

export interface Zone {
  id: number
  description: string
  latitude: number
  longitude: number
}

export interface Equipment {
  id: number
  description: string
  movility: boolean
  idCategory: number
  idType: number
  idLocation: number
}

export interface Category {
  id: number
  description: string
  idMaintenanceG: number
}

export interface Type {
  id: number
  description: string
}

export interface Location {
  id: number
  description: string
  latitude: number
  longitude: number
  idZone: number
}

export interface MaintenanceGuideline {
  id: number
  description: string
  frequency: number
}

export interface Task {
  id: number
  description: string
  idMaintenanceG: number
}