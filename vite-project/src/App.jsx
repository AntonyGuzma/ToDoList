import './App.css'
import { Cabecalho, Conteudo } from './components'
import { Rodape } from './components/Rodape/Rodape'

const App = () =>  {

  return (
    <>
      <Cabecalho nomeUsuario='Joao'/>
      <Conteudo>
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores velit quisquam neque quos! Deleniti delectus, velit, quia quae voluptate officiis voluptatum nihil ipsa sapiente dolorem atque accusamus quos, id nisi.</p>
      </Conteudo>
      <Rodape autor='Antony'/>
    </>
  )
}

export {App}
