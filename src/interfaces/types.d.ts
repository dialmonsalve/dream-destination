interface Hotel {
  id: number,
  name: string,
  city: string,
  description: string,
  active: boolean,
  habitaciones: [
    {
      "id": 201,
      "tipo": "Individual",
      "costoBase": 100,
      "impuestos": 10,
      "isAvailable": true,
      "capacidad": 1
    },
    {
      "id": 202,
      "tipo": "Doble",
      "costoBase": 150,
      "impuestos": 15,
      "isAvailable": true,
      "capacidad": 2
    }
  ]
}

interface Room {
  id: string,
  tipo: RoomType,
  costoBase: number,
  impuestos: number,
  isAvailable: boolean,
  capacidad: number
}

type RoomType = ''

