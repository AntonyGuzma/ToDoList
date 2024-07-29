import { AppContext } from "../contexts/AppContext"
import { useContext } from "react"

const useAppContext = () => {
    const contexto = useContext(AppContext)

    return contexto
}

export { useAppContext }