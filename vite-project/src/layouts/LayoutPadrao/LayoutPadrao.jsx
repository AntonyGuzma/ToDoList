import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../components"
import { useAppContext } from "../../hooks"

function LayoutPadrao() {
  
  const { criador } = useAppContext()
  return (
    <>
        <Cabecalho nomeUsuario='Joao'/>
        <Conteudo>
            <Outlet />
        </Conteudo>
        <Rodape autor={criador}/>
    </>
  )
}

export { LayoutPadrao }
