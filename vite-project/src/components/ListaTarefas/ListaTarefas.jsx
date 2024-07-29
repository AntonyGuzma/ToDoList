import style from './ListaTarefas.module.css'
import { ListatarefasItem } from './ListaTarefasItem'
import { useAppContext } from '../../hooks'

function ListaTarefas() {

  const { tarefas } = useAppContext() 

  return (
    <ul className={style.ListaTarefas}>
        {!tarefas.length && (
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
