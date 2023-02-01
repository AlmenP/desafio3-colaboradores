import React, { useState } from "react";
import { data } from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Lista = () => {
    const [dataCollab, setDataCollab] = useState (data) 
    const [nombreNewCollab, setNombre] = useState ("")
    const [emailNewCollab, setEmail] = useState ("")
    const [buscar, setBuscar] = useState ("")
    const [contenido, setContenido] = useState (data)

    const buscarColaborador = (e) => {
        e.preventDefault()
        console.log(buscar) 
        const resultado = contenido.filter((item)=>{
            return item.nombre.toLowerCase().includes(buscar.toLowerCase());
        })

        console.log(resultado)
        console.log(contenido)
        setDataCollab(resultado)
    }

    const agregar = (e) => {
        e.preventDefault()
        setDataCollab([...dataCollab, {id: data.length + 1, nombre: nombreNewCollab, email: emailNewCollab}])
    
        setContenido([...data, {id: data.length + 1, nombre: nombreNewCollab, email: emailNewCollab}])

    }

    const renderColaboradores = () => {
        return dataCollab.map((tarea) => (
          <li key={tarea.nombre} onClick={() => console.log(tarea)}>
            {" "}
            {tarea.nombre} - {tarea.email}{" "}
          </li>
        ));
      };
    

    return (
        <div className="form" ><Form className="form-title">
              <Form.Control className="ps-2 mb-2" size="sm" type="text" placeholder="Busqueda por Nombre"  onChange={(e)=> setBuscar(e.target.value)}/>
              <Button className="m-auto d-flex w-25" variant="info" onClick={ buscarColaborador }><span className="d-flex justify-content-center w-100">Buscar</span></Button>{' '}
              </Form>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese Email" onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Ingrese su Nombre" onChange={(e)=> setNombre(e.target.value)} />
            </Form.Group>
            <Button className="m-auto d-flex w-25" variant="warning" onClick={agregar} type="submit">
            <span className="d-flex justify-content-center w-100">Ingresar</span>
            </Button>
        </Form>
        <div>
            <ul class="mt-3">{renderColaboradores()}</ul>
        </div>
        </div>
    )
}

export default Lista