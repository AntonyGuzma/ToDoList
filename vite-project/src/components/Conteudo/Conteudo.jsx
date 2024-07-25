import style from './Conteudo.module.css'

function Conteudo(props) {
  const { children } = props
    
  return (
    <div className={style.Conteudo}>
        {children}
    </div>
  )
}

export { Conteudo };
