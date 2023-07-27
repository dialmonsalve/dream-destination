import { useContext } from "react"
import { HandleUIContext } from "../context/handleUI"

export const useHandleUI = () => {

  const context = useContext(HandleUIContext)

  if (context === undefined) throw new Error("Context is not used inside the parent components")

  return context
}
