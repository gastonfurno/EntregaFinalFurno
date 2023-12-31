import {useForm} from "react-hook-form";

const Contacto = () => {
  
    const {register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data);
        }

    return(

        <div>
            <h2 className="contactoForm">Contacto</h2>

            <form className="datosFormulario" onSubmit={handleSubmit(enviar)}>

                <input className="datos" type="text" placeholder="Ingresá tu nombre" {...register("nombre")}/>
                <input className="datos" type="email"  placeholder="Ingresa tu email"{...register("email")}/>
                <input className="datos" type="phone"  placeholder="Ingresa tu telefono"{...register("telefono")}/>
                

                <button className="buttonFormulario" type="submit">Enviar</button>
            </form>

        </div>
    )

}
export default Contacto