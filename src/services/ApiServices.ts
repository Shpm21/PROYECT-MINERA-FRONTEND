import { ENDPOINT } from "../config/config"
import { LocalStorage } from "./LocalStorage"
import axios from "axios"
export class ApiServices {
  private _URL: string = ENDPOINT
  private _token: string | null = LocalStorage.getToken()
  private static instance: ApiServices
  private constructor() { }
  static getInstance() {
    if (!ApiServices.instance) {
      ApiServices.instance = new ApiServices()
    }
    return ApiServices.instance
  }

  
  private getAll = async (path: string) => {
    const response = await axios.get(`${this._URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
      },
    })
    return response.data
  }

  private getByPrimaryKey = async (path: string, key: string) => {
    const response = await axios.get(`${this._URL}/${path}/${key}`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
      },
    })
    return response.data
  }
  
  get = async (path: string, key?: string): Promise<any> => {
    if (key) {
      return await this.getByPrimaryKey(path, key)
    }
    return await this.getAll(path)
  }
  
  add = async (path: string, data: any) => {
    const response = await axios.post(`${this._URL}/${path}`, data, {
      headers: {
        Authorization: `Bearer ${this._token}`,
      },
    })
    return response.data
  }

  update = async (path: string, data: any) => {
    const response = await axios.put(`${this._URL}/${path}`, data, {
      headers: {
        Authorization: `Bearer ${this._token}`,
      },
    })
    return response.data
  }

  delete = async (path: string, key: string) => {
    const response = await axios.delete(`${this._URL}/${path}/${key}`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
      },
    })
    return response.data
  }

}