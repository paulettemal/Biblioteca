import { useEffect, useState } from "react";
import AutoresComp from "./AutoresComp";
import { Autor } from "../../intefaces/InterfazAutor";
import { extraerAutores } from "../../services/ServicioAutores";

function SeccionAutores(){
    const [autores, setAutores] = useState<Autor[]>([])

    const traeAutores = async () =>{
        try{
            const respuesta = await extraerAutores();
            setAutores(respuesta)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        traeAutores();
    },[])

    return (
        <>
            <div className="flex flex-col bg-gray-100 mt-10 rounded-l-4xl p-3">
                <h2 className="pl-8 font-semibold text-xl mt-10 mb-5">Famous Authores</h2>
                <div className="pb-7">
                {autores.map((aut) => (
                    <AutoresComp key={aut.nombre} src={aut.src} nombre={aut.nombre} numeroLibros={aut.numeroLibros} ></AutoresComp>
                ))}
                </div>

            </div>
        </>
    )

}
export default SeccionAutores