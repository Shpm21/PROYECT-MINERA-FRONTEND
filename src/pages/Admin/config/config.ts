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