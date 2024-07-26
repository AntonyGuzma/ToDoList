import style from './ListaTarefasItem.module.css'
import { Botao, Tipo_Botao } from "../../Botao"

function ListatarefasItem(props) {
    const { nome } = props

    return (
    <li className={style.ListaTarefasItem}> {nome} <Botao texto='-' tipo={Tipo_Botao.SECUNDARIO}/> </li>
  )
}

export { ListatarefasItem }
