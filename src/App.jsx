import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'
import { Row,Col, Table } from 'react-bootstrap'
import List from './components/List'
import ListData from './components/ListData'
import Buscador from './components/Buscador'
import Alerts from './components/Alerts'


function App() {

  const [Colaboradores, setColaboradores] = useState(ListData)
  const [message, setMessage]= useState('')
  const [Error,setError] = useState(false)
  const [Success,setSuccess] = useState(false)
  const [filtro, setFiltro] = useState('')

  const AgregarColaborador = (NuevoColaborador)=> {
    setColaboradores([...Colaboradores, NuevoColaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevaLista = Colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevaLista);
  }

  const buscarColaboradores = (termino)=>{
    setFiltro(termino)
  }
  const colaboradoresFiltrados = Colaboradores.filter((colaborador) => {
    const valores = Object.values(colaborador).map((value) => value.toString().toLowerCase());
    return (
      valores.some((valor) => valor.includes(filtro.toLowerCase()))
      );
  })

  return (
    <>
      <Row className='p-3'>
        <Col>
          <h1>Lista de colaboradores</h1>
          <Buscador buscar ={buscarColaboradores}/>
          <Table striped bordered hover size="sm" responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {colaboradoresFiltrados.map((colaborador, index)=>{
                    return (
                      <List
                        key={index}
                        id = {colaborador.id}
                        nombre={colaborador.nombre}
                        correo={colaborador.correo}
                        edad={colaborador.edad}
                        cargo={colaborador.cargo}
                        telefono={colaborador.telefono}
                        eliminarColaborador={eliminarColaborador}
                      />
                    )
                  })}
                </tbody>
            </Table>
        </Col>
        <Col>

          <Formulario 
            setMessage = {setMessage} 
            agregarColaborador = {AgregarColaborador} 
            setError= {setError} 
            setSuccess = {setSuccess}
          />
          {Error && <Alerts variant="danger" message = {message}/>}
          {Success && <Alerts variant="success" message= {message}/>}
        </Col>
      </Row>
    </>
  )
}

export default App
