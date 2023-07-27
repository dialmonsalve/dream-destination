import { createContext } from 'react';


interface ContextProps {
  toggleSidebar: boolean;
  onToggleSidebar:()=> void
}

export const HandleUIContext = createContext({} as ContextProps)