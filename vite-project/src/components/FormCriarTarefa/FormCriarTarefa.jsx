import style from './FormCriarTarefa.module.css'
import { Botao, Tipo_Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"

function FormCriarTarefa() {
  return (
    <form className={style.FormCriarTarefa}>
      <CampoTexto/>
      <Botao texto='+'/>
    </form>
  )
}

export { FormCriarTarefa }
