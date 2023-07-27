import { HandleUIState } from './HandleUIProvider';


type HandleUIActionType = 
  | { type: '[HandleUI] - Toggle sidebar', payload:boolean }

export const handleUIReducer = (state: HandleUIState, action: HandleUIActionType): HandleUIState => {

  switch (action.type) {
    case '[HandleUI] - Toggle sidebar':
      return {
        ...state,
        toggleSidebar: action.payload
      }

    default:
      return state;
  }
}