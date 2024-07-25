import './App.css'
import { Cabecalho, Conteudo } from './components'
import { Inicial } from './pages'
import { Rodape } from './components/Rodape/Rodape'

const App = () =>  {

  return (
    <>
      <Cabecalho nomeUsuario='Joao'/>
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape autor='Antony'/>
    </>
  )
}

export {App}
