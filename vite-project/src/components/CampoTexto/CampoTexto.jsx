import style from './CampoTexto.module.css'

function CampoTexto(props) {
  
  return (
    <input type='text' 
    className={style.CampoTexto} 
    {...props} />
  )
}

export { CampoTexto }
