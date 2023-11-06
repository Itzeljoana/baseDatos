import React from 'react';
import { Table } from 'react-bootstrap';
import listaInicial from './listaInicial';

const Listado = ({ colaborador  }) => {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Tel</th>
            </tr>
          </thead>
          <tbody>
            {colaborador.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.email}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.tel}</td>
            </tr>
            ))}
        </tbody>
        </Table>
      </div>
    );
  };
  
  export default Listado;
