import { useState } from 'react'
import Mensaje  from './components/Mensaje'

import './App.css'

function App() {

  const initialState = {
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialState);

  const [mensaje, setMensajes] = useState(); 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit", formData);
    setMensajes({"texto":'Información enviada exitosamente!', "tipo":"success"});
    setFormData(initialState); 
  };


  return (
    <>
     <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" value={formData.firstName} id="firstName" name="firstName" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="lastname">Apellido:</label>
          <input type="text" value={formData.lastName} id="lastName" name="lastName" onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" value={formData.email} id="email" name="email" onChange={handleChange} required/>
        </div>
        <button type="submit" onClick={()=>setMensajes() }>Enviar</button>

     </form>
     { mensaje && <Mensaje mensaje={mensaje.texto} tipo={mensaje.tipo} /> }
    </>
  )
}

export default App
