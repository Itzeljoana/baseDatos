import { useState } from "react";
// import Alert from "./Alert";


// const Formulario = ({setMensaje}) => {
const Formulario = ({agregarCol}) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [tel, setTel] = useState("");
   
    // const handleSubmit  = (e) => {
    //     e.preventDefault();
    //     if( nombre === "" ||! isValidEmail(email) || edad === "" || cargo === ""  || tel === "" ){
    //         setMensaje("Los campos deben estar llenos");
    //     }else {
    //         setMensaje ('Colaborador agregado');
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || email==="" || edad === "" || cargo === ""  || tel === "" ) {
            alert('Todos los campos son obligatorios');  
        }else{
            const nuevoCol = {
                nombre,
                email,
                edad,
                cargo,
                tel,
            };
            agregarCol(nuevoCol);
            setNombre('');
            setEmail('');
            setEdad('');
            setCargo('');
            setTel('');
        }
    };
    return (
    <>
    <h1>Agregar colaborador</h1>
    <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
            <label></label>
            <input
            placeholder="Nombre"
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value ={nombre}
            />
        </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Email"
        type="email"
        name="email"
        className="form-control"
        onChange={(e)=> setEmail(e.target.value)}
        value= {email}
        />
    </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Edad"
        type="number"
        name="edad"
        className="form-control"
        onChange={(e)=> setEdad(e.target.value)}
        value= {edad}
        />
    </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Cargo"
        type="text"
        name="cargo"
        className="form-control"
        onChange={(e)=> setCargo(e.target.value)}
        value= {cargo}
        />
    </div>
    <div className="form-group">
        <label></label>
        <input
        placeholder="Telefono"
        type="number"
        name="tel"
        className="form-control"
        onChange={(e)=> setTel(e.target.value)}
        value= {tel}
        />
    </div>
    <button type="submit" className="btn btn-block btn-lg btn-purple">Agregar colaborador</button>
</form>
</>
)
}
export default Formulario