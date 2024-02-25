import { Button } from "react-bootstrap";
const List= ({id,nombre,correo,edad,cargo,telefono,eliminarColaborador})=> {

  return (
            <tr key = {eliminarColaborador.id}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{correo}</td>
                <td>{edad}</td>
                <td>{cargo}</td>
                <td>{telefono}</td>
                <td>
                     <Button variant="danger" onClick={() => eliminarColaborador(id)}>
                    Eliminar
                    </Button>
                </td>
            </tr>
        
  );
}

export default List;