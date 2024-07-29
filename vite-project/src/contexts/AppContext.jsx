import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const { children } = props;
  
  const [criador, setCriador] = useState('Antony');

  const [tarefas, setTarefas] = useState([]);

  const [LoadingCriar, setLoadingCriar] = useState(false)
  const [LoadingEditar, setLoadingEditar] = useState(false)
  const [LoadingDeletar, setLoadingDeletar] = useState(null)
  const [LoadingCarregar, setLoadingCarregar] = useState(null)

  const carregarTarefas = async() => {
    setLoadingCarregar(true)
    const {data = []} = await api.get('/tarefas')
    // console.log(await api.get('/tarefas'))
    
    setTarefas([...data,])

    setLoadingCarregar(false)
  }

  const adicionarTarefa = async (nomeTarefa) => {
    setLoadingCriar(true)
    const { data: tarefa } = await api.post('/tarefas', {nome: nomeTarefa})

    setTarefas((estadoAtual) => {

      return [...estadoAtual, tarefa];
    });

    setLoadingCriar(false)
  };

  const removerTarefa = async (idTarefa) => {
    setLoadingDeletar(idTarefa)
    await api.delete(`tarefas/${idTarefa}`)
    
    setTarefas(estadoAtual => {
      const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa)

      return [...tarefasAtualizadas]
    })

    setLoadingDeletar(null)
  }

  const editarTarefa = async (idTarefa, nomeTarefa) => {
    setLoadingEditar(idTarefa)
    const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {nome: nomeTarefa})

    setTarefas(estadoAtual => {
      const tarefasAtualizadas = estadoAtual.map(tarefa =>{
        return tarefa.id == idTarefa ? {
          ...tarefa,
          nome: tarefaAtualizada.nome
        } : tarefa
      })
      return [...tarefasAtualizadas,]
    })

    setLoadingEditar(null)
  }

  //hook para carregar as tarefas da api ao atualizar as paginas 
  useEffect(() => {
    carregarTarefas()
  }, [])

  return (
    <AppContext.Provider value={{ 
      criador, 
      tarefas,
      LoadingCriar,
      LoadingCarregar,
      LoadingDeletar,
      LoadingEditar,
      adicionarTarefa, 
      removerTarefa, 
      editarTarefa }}>
      {/* forma para passar para todos os componentes filhos */}
      {children}
    </AppContext.Provider> 
  );
};