import { Routes, Route } from 'react-router-dom'
import { Inicial, SobreNos, Rota404 } from './pages'
import { LayoutPadrao } from './layouts'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<LayoutPadrao/>}>
            <Route path="/" element={<Inicial/>}/>
            <Route path='/sobre-nos' element={<SobreNos/>}/>
            <Route path='*' element={<Rota404/>}/>
        </Route>
    </Routes>
  )
}

export { Router }
