
const ButtonTasks = ({tarea, setTasks}) => {

  return (
    <button onClick={ () => setTasks((prev) => [...prev, tarea])} >{tarea}</button>
  )
}

export default ButtonTasks