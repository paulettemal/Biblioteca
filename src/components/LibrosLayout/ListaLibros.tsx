import { useEffect, useState } from "react";
import { extraerDatos} from "../../services/ServicioLibros";
import TarjetaLibro from "./TarjetaLibro";
import { Libro } from "../../intefaces/InterfazLibro";

function ListaLibros(){
    const [libros, setLibros] = useState<Libro[]>([]);
    const cargarLibros = async () => { 
        try {
            const data = await extraerDatos();
            const primerosCuatroLibros = data.slice(6, 11);
            setLibros(primerosCuatroLibros);
        } catch(err) {
            console.log("Hay un error:", err);
        }
    };

    useEffect(() => {
        cargarLibros();
    }, []);

    return (
        <>
            <div className="flex flex-col">
            <h2 className="pl-15 pt-4 font-semibold text-xl ">New Release</h2>
                <div className="bg-white h-fit ml-10 mt-2 p-5 pt-2 pb-3 mb-5 rounded-lg flex flex-row gap-15">
                    {libros.map((libro)=>(
                        <TarjetaLibro key={libro.id} autor={libro.autor} titulo={libro.titulo} genero={libro.genero} fuente={libro.imagen}></TarjetaLibro>
                    ))}
                    </div>
                </div>
        </>
    );
}
export default ListaLibros;