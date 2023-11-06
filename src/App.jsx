import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Alert from './components/Alert';
import Formulario from './components/Formulario';
import Listado from "./components/Listado";
import listaInicial from './components/listaInicial';


function App() {
  // const [mensaje, setMensaje] =useState('');
  const [colaboradores, setColaboradores] = useState(listaInicial);

  
  const agregarColaborador  = (nuevoCol) =>{
    setColaboradores([...colaboradores, nuevoCol]);
    console.log(colaboradores);
  };

  return (
    <>
    <Listado colaborador={colaboradores} />
    {/* <Formulario setMensaje={setMensaje} />
    {mensaje && <Alert mensaje={mensaje} />}   */}
    <Formulario agregarCol={agregarColaborador}/>

    </>
  )
}

export default App
