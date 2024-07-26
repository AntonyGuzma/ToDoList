import style from './ListaTarefas.module.css'
import { ListatarefasItem } from './ListaTarefasItem'

function ListaTarefas() {

  const tarefas = [
    {id: 1, nome: 'Item 1'},
    {id: 1, nome: 'Item 2'},
    {id: 1, nome: 'Item 3'},
    {id: 1, nome: 'Item 4'},
  ]

  return (
    <ul className={style.ListaTarefas}>
        {tarefas.map(item => 
          // sempre utilizar o key quando usar repetições
          <ListatarefasItem key={item.id} nome={item.nome}/>
        )}
    </ul>
  )
}

export { ListaTarefas }
