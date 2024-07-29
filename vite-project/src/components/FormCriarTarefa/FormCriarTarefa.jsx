import style from './FormCriarTarefa.module.css'
import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"
import { useState } from 'react'
import { useAppContext } from '../../hooks'
import { Loading } from '../Loading'


function FormCriarTarefa() {
  const { adicionarTarefa, LoadingCriar } = useAppContext()
  const [nomeTarefa, setNomeTarefa] = useState('')

  const submeterFormulario = (e) => {
    e.preventDefault();

    if (!nomeTarefa) {
      return;
    } 

    adicionarTarefa(nomeTarefa)

    setNomeTarefa('')
  };
  
  return (
    <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={event => setNomeTarefa(event.currentTarget.value)}/>
      <Botao texto={LoadingCriar ? <Loading/> : '+'}/>
    </form>
  )
}

export { FormCriarTarefa }
