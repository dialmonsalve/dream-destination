interface PropsNav {
  id: number;
  name: string;
  href: string;

}

export const navLinks:PropsNav[] = [
  // {
  //   id: 1,
  //   name: "flights",
  //   href: ''
  // },
  {
    id: 2,
    name: "hotels",
    href: '/hotels'
  },
  {
    id: 3,
    name: "bookings",
    href: '/bookings'
  },
  // {
  //   id: 4,
  //   name: "plan packages",
  //   href: ''
  // },
]

export const headerLinks = [
  {
    id: 1,
    name: "companies",
    href: '#'
  },
  {
    id: 2,
    name: "discover",
    href: '#'
  },
  {
    id: 3,
    name: "help",
    href: '#'
  },
]