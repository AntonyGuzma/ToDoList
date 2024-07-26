import style from './Inicial.module.css'
import { FormCriarTarefa, ListaTarefas } from "../../components"

function Inicial() {
  return (
    <div className={style.Inicial}>
        <FormCriarTarefa/>
        <ListaTarefas/>
    </div>
  )
}

export { Inicial }
