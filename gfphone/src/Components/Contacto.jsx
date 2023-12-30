import {useForm} from "react-hook-form";

const Contacto = () => {
  
    const {register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data);
        }

    return(

        <div>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")}/>
                <input type="email"  placeholder="Ingresa tu email"{...register("email")}/>
                <input type="phone"  placeholder="Ingresa tu telefono"{...register("telefono")}/>
                

                <button type="submit">Enviar</button>
            </form>

        </div>
    )

}
export default Contacto