
const ShowTasks = ({listaTareas}) => {
  return (
    <>
        <ul>
            {listaTareas.map( (tarea, index) => (
                <li key={index}>{tarea}</li>
            ))}
        </ul>
    </>
  )
}

export default ShowTasks
