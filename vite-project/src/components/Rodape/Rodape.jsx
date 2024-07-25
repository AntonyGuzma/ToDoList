import style from './Rodape.module.css'

function Rodape(props) {
  const { autor } = props
  const anoAtual = (new Date()).getFullYear()
  return (
    <footer className={style.Rodape}>
        <p>React Básico - {anoAtual} - {autor}</p>
    </footer>
  )
}

export { Rodape }
