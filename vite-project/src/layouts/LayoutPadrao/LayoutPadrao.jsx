import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../components"

function LayoutPadrao() {
  return (
    <>
        <Cabecalho nomeUsuario='Joao'/>
        <Conteudo>
            <Outlet />
        </Conteudo>
        <Rodape autor='Antony'/>
    </>
  )
}

export { LayoutPadrao }
