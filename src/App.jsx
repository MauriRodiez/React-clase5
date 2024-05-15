
import { useState } from 'react'
import './App.css'
import ButtonTasks from './Components/ButtonTasks';
import ShowTasks from './Components/ShowTasks';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <ButtonTasks tarea="Lavarse los dientes" setTasks={setTasks}/>
      <ButtonTasks tarea="Desayunar y preparar la mochila" setTasks={setTasks}/>
      <ButtonTasks tarea="Abrigarse y salir" setTasks={setTasks}/>
      <ShowTasks listaTareas={tasks}/>
    </>
  )
}

export default App
