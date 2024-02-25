import { FormControl } from "react-bootstrap"
import React, {useState} from 'react'

const Buscador = ({buscar})=> {
    const [busqueda, setBusqueda] = useState('')

    const handleChange = (e) => {
        const valorBusqueda = e.target.value
        setBusqueda(valorBusqueda)
        buscar(valorBusqueda)

    }

    return (
        <>
        <FormControl 
            className="mt-4" 
            placeholder="Buscar Colaborador"
            value = {busqueda}
            onChange = {handleChange}
        />
        </>
    )
}
export default Buscador