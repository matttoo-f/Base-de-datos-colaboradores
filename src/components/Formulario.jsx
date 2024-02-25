import React from "react"
import { Form, FormControl, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import ListData from './ListData'


const Formulario = ({ setMessage, agregarColaborador,setError, setSuccess }) => {

    const [IdCounter, setIdCounter]= useState(ListData.length)
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Age, setAge] = useState("")
    const [Cargo, setCargo] = useState("")
    const [Phone, setPhone] = useState("")


    const ChangeName = (e) =>{
        setName(e.target.value)
        setError(false)
    }
    const ChangeEmail = (e) =>{
        setEmail(e.target.value)
        setError(false)
    }

    const ChangeAge = (e) =>{
        setAge(e.target.value)
        setError(false)
    }

    const ChangeCargo = (e) =>{
        setCargo(e.target.value)
        setError(false)
    }

    const ChangePhone = (e) =>{
        setPhone(e.target.value)
        setError(false)
    }
    const Validation = (e) => {
        e.preventDefault()

    
        if (Name === "" || Email === "" || Age === "" || Cargo === "" || Phone === "") {
          setError(true)
          setSuccess(false) 
          setMessage('Verifica y completa todos los campos!.')
          return
        }
        
        if(Email.includes('@')){

        }else {
            setMessage('El correo debe contener @')
            setError(true)
            setSuccess(false)
            return
        }
 

        const NuevoColaborador = {
            id :IdCounter + 1, 
            nombre:Name,
            correo: Email,
            edad: Age,
            cargo: Cargo,
            telefono: Phone,
          }
        agregarColaborador(NuevoColaborador)

        setIdCounter(IdCounter + 1)

        setName('')
        setEmail('')
        setAge('')
        setCargo('')
        setPhone('')

      
        setError(false)
        setSuccess(true)
        setMessage('Colaborador agregado exitosamente!')

        return
      };


    return (
        <>
        <Form className="sm-1col d-flex flex-column p-3 row g-2 text-center text-white bg-black" onSubmit={Validation}>
            <h2>Agregar Colaborador</h2>
            <FormControl type="text" value={Name} placeholder="Nombre del colaborador" onChange={ChangeName}/>
            <FormControl type="text" value={Email} placeholder="Email del colaborador"onChange={ChangeEmail}/>
            <FormControl type="number" value={Age} placeholder="Edad del colaborador"onChange={ChangeAge}/>
            <FormControl type="text" value={Cargo} placeholder="Cargo del colaborador"onChange={ChangeCargo}/>
            <FormControl type="number" value={Phone} placeholder="Teléfono del colaborador"onChange={ChangePhone}/>
            <Button variant="primary" type="submit">Agregar Colaborador</Button>{' '}
        </Form>
        </>
    )
}
export default Formulario