import { ReactNode, useReducer } from 'react';
import { HandleUIContext, handleUIReducer } from './';

export interface Props {
  children: ReactNode;
}

export interface HandleUIState {
  toggleSidebar: boolean;
}


const HANDLE_UI_INITIAL_STATE: HandleUIState = {
  toggleSidebar: false,
}

export const HandleUIProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(handleUIReducer, HANDLE_UI_INITIAL_STATE);

  const onToggleSidebar = () => {
    dispatch({ type: '[HandleUI] - Toggle sidebar', payload: !state.toggleSidebar })
  }

  return (
    <HandleUIContext.Provider value={{
      ...state,


      onToggleSidebar,
    }}>
      {children}
    </HandleUIContext.Provider>
  )
}