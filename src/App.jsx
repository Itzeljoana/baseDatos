import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Alert from './components/Alert';
import Formulario from './components/Formulario';
import Listado from "./components/Listado";
import listaInicial from './components/listaInicial';
import Buscar from './components/Buscar';


function App() {
  const [colaboradores, setColaboradores] = useState(listaInicial);
  const [mensaje, setMensaje] = useState('');

  
  const agregarColaborador  = (nuevoCol) =>{
    if (nuevoCol.nombre === '' || nuevoCol.email === '' || nuevoCol.edad === '' || nuevoCol.cargo ==='' || nuevoCol.tel === ''){
      setMensaje('Los cambios no deben estar vacios');
    }else{
      setColaboradores([...colaboradores, nuevoCol]);
      setMensaje('Nuevo colaborador Agregado')
    }
  };

  return (
    <>
    <Buscar colaborador={colaboradores} setColaboradores ={setColaboradores}/>
    <Listado colaborador={colaboradores} />
    <Formulario agregarCol={agregarColaborador}/>
    <Alert mensaje = {mensaje}/>

    </>
  )
}

export default App
