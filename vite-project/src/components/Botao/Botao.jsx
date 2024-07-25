import style from './Botao.module.css'
import { Tipo_Botao } from './constantes'

function Botao(props) {
  const {texto, tipo = Tipo_Botao.PRIMARIO, ...outrasProps} = props

  return (
    <button className={style.Botao} tipo={tipo} {...outrasProps}>{texto}</button>
  )
}

export { Botao }
