
// function Cabecalho(props) {
//   return (
//     <div>
//         Bem vindo, {props.nomeUsuario}
//     </div>
//   )
// }

const Cabecalho = (props) => {

    const { nomeUsuario } = props

    return (
        <div>
            Bem vindo, {nomeUsuario}
        </div>
      ) 
}

// export nomeado
export { Cabecalho }
