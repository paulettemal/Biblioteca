import { useEffect, useState } from "react";
import { extraerMasVendidos } from "../../services/ServicioLibros";
import CompradosComp from "./CompradosComp";
import { Libro } from "../../intefaces/InterfazLibro";

function ListaComprados(){
    const [librosComp, setLibrosComp] = useState<Libro[]>([]);
    const traerLibros = async () => {
        const datos = await extraerMasVendidos();
        const ultimosTres = datos.slice(-3);
        setLibrosComp([ultimosTres[2], ultimosTres[1], ultimosTres[0]]);
        console.log(librosComp);
    };

    useEffect(()=>{
        traerLibros();
    },[])

    

    return(
        <>
            <div>
            <h2 className="pl-15 font-semibold text-xl ">Best sellers</h2>
            <div className="flex flex-row gap-10 p-10 pt-5 pb-0">
                {librosComp.map((libro)=>(
                    <CompradosComp key={libro.titulo} id={libro.id} numeroVentas={libro.numeroVentas} titulo = {libro.titulo} imagen= {libro.imagen} autor={libro.autor} anio_publicacion={libro.anio_publicacion}></CompradosComp>
                ))}
            </div>
            </div>
        </>
    )
}
export default ListaComprados