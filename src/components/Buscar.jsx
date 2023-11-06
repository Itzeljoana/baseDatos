import React, {useState} from "react";


const Buscar = ({ colaborador, setColaboradores }) => {
    const [busca, setBusca] = useState('');
  
    const handleChange = (e) => {
      setBusca(e.target.value);
      const resultado = colaborador.filter((colaborador) => {
        const termino = e.target.value.toLowerCase();
        return (
          colaborador.nombre.toLowerCase().includes(termino) ||
          colaborador.email.toLowerCase().includes(termino) ||
          colaborador.cargo.toLowerCase().includes(termino)
        );
      });
      setColaboradores(resultado);
    };
    return (
        <div>
            <input 
            type="text"
            placeholder="Buscar colaborador"
            value={busca}
            onChange={handleChange} />
        </div>
    )  
}
export default Buscar;
