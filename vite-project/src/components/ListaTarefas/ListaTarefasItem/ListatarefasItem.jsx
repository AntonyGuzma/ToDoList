import style from './ListaTarefasItem.module.css'
import { Botao, CampoTexto, Loading, Tipo_Botao } from "../../../components"
import { useAppContext } from '../../../hooks'
import { useState } from 'react'

function ListatarefasItem(props) {
    const { id, nome } = props
    const { removerTarefa, editarTarefa, LoadingDeletar, LoadingEditar } = useAppContext() 
    const [estaEditando, setEstaEditando] = useState(false)
    
    const onBlurTarefa= (event) => {
      const nomeTarefa = event.currentTarget.value

      editarTarefa(id, nomeTarefa)
      setEstaEditando(false)
    }

    const LoadingEstaEditando = LoadingEditar == id;
    const LoadingEstaDeletando = LoadingDeletar == id;

    return (
    <li className={style.ListaTarefasItem}>
      {LoadingEstaEditando || estaEditando && (
        <CampoTexto defaultValue={nome} onBlur={onBlurTarefa}  autoFocus/>
      )}
      {!LoadingEstaEditando && !estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome} </span>
      )}

      {LoadingEstaEditando && (<Loading/>)}
      <Botao 
        onClick={() => removerTarefa(id)} 
        texto={LoadingEstaDeletando ? <Loading/> : '-'}
        tipo={Tipo_Botao.SECUNDARIO}/> 
    </li>
  )
}

export { ListatarefasItem }
