import style from './ListaTarefasItem.module.css'
import { Botao, CampoTexto, Tipo_Botao } from "../../../components"
import { useAppContext } from '../../../hooks'
import { useState } from 'react'

function ListatarefasItem(props) {
    const { id, nome } = props
    const { removerTarefa, editarTarefa } = useAppContext() 
    const [estaEditando, setEstaEditando] = useState(false)

    return (
    <li className={style.ListaTarefasItem}>
      {estaEditando && (
        <CampoTexto defaultValue={nome} onBlur={() => setEstaEditando(false)} onChange={e => editarTarefa(id, e.currentTarget.value)} autoFocus/>
      )}
      {!estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome} </span>
      )}
      <Botao 
        onClick={() => removerTarefa(id)} 
        texto='-' 
        tipo={Tipo_Botao.SECUNDARIO}/> 
    </li>
  )
}

export { ListatarefasItem }
