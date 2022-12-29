interface MenuAdminText {
  key: string
  page: {
    textButton: string
    placeholder: string
  }
}

const MenuAdminTexts: MenuAdminText[] = [
  {
    key: "category",
    page: {
      textButton: "Categoría",
      placeholder: "ID"
    }
  },
  {
    key: "equipment",
    page: {
      textButton: "Equipamiento",
      placeholder: "ID"
    }
  },
  {
    key: "location",
    page: {
      textButton: "Localización",
      placeholder: "ID"
    }
  },
  {
    key: "type",
    page: {
      textButton: "Tipo",
      placeholder: "ID"
    }
  },
  {
    key: "user",
    page: {
      textButton: "Usuario",
      placeholder: "Rut"
    }
  },
]

export const getMenuAdminTexts = () => MenuAdminTexts

export const getMenuByKey = (key: string) => MenuAdminTexts.find((menu) => menu.key === key)

interface Option {
  optionPage: string,
  addPage: string,
}

interface DescriptionsText {
  key: string
  options: Option
}

// equipments: 'Opciones de equipos',
// users: 'Opciones de usuarios',
// maintenance: 'Opciones de mantenimiento',
// types: 'Opciones de tipos',
// categories: 'Opciones de categorias',
// locations: 'Opciones de ubicaciones'
const DescriptionsTexts: DescriptionsText[] = [
  {
    key: 'equipments',
    options: {
      optionPage: 'Opciones de Equipamiento',
      addPage: 'Agregar Equipamiento',
    }
  },
  {
    key: 'users',
    options: {
      optionPage: 'Opciones de Usuarios',
      addPage: 'Agregar Usuario',
    }
  },
  {
    key: 'maintenance',
    options: {
      optionPage: 'Opciones de Mantenimiento',
      addPage: 'Agregar Mantenimiento',
    }
  },
  {
    key: 'types',
    options: {
      optionPage: 'Opciones de Tipos',
      addPage: 'Agregar Tipo',
    }
  },
  {
    key: 'categories',
    options: {
      optionPage: 'Opciones de Categorías',
      addPage: 'Agregar Categoría',
    }
  },
  {
    key: 'locations',
    options: {
      optionPage: 'Opciones de Ubicaciones',
      addPage: 'Agregar Ubicación',
    }
  }
]

export const getOptionPage = (key: string) => DescriptionsTexts.find((menu) => menu.key === key)?.options.optionPage

export const getAddPage = (key: string) => DescriptionsTexts.find((menu) => menu.key === key)?.options.addPage

export const ENDPOINT = 'http://localhost:9000'