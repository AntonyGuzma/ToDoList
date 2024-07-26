import './App.css'
import { Cabecalho, Conteudo } from './components'
import { Inicial } from './pages'
import { Rodape } from './components/Rodape/Rodape'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

const App = () =>  {

  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export {App}
