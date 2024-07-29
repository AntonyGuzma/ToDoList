import style from './ListaTarefas.module.css'
import { ListatarefasItem } from './ListaTarefasItem'
import { useAppContext } from '../../hooks'
import { Loading } from '../Loading'

function ListaTarefas() {

  const { tarefas, LoadingCarregar } = useAppContext() 

  return (
    <ul className={style.ListaTarefas}>
        { LoadingCarregar && (
          <p>Carregando... <Loading/></p>
        ) }
        { !LoadingCarregar && !tarefas.length && (
           <p>Não há tarefas cadastradas</p>
        )}
        {tarefas.map(item => 
          // sempre utilizar o key quando usar repetições
          <ListatarefasItem 
            key={item.id} 
            id={item.id} 
            nome={item.nome}/>
        )}
    </ul>
  )
}

export { ListaTarefas }
