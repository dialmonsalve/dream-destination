interface Hotel {
  id: number,
  name: string,
  city: string,
  description: string,
  active: boolean,
  habitaciones: Room[]
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

