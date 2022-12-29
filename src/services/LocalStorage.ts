export class LocalStorage {
  private static instance: LocalStorage
  private constructor() { }
  static getInstance() {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage()
    }
    return LocalStorage.instance
  }

  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || "")
  }

  static removeItem(key: string) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }

  static setToken(token: string) {
    localStorage
      .setItem("token", token)

  }

  static getToken() {
    return localStorage.getItem("token")
  }

  static removeToken() {
    localStorage.removeItem("token")
  }



}