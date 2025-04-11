import { useEffect, useState } from "react";
import Header from "../components/LayoutComp/Header"
import Sidebar from "../components/LayoutComp/Sidebar"
import { extraerDatos } from "../services/ServicioLibros";
import CompradosComp from "../components/Comprados/CompradosComp";
import '../App.css'
import { Libro } from "../intefaces/InterfazLibro";

function AllBooks(){
    const [libros, setLibros] = useState<Libro[]>([]);

    const traeDatos = async ()=>{
        try{
            const respuesta = await extraerDatos();
            setLibros(respuesta)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        traeDatos()
    },[])

    return (
        <div className="flex h-screen w-full bg-white overflow-x-hidden">
            <Sidebar></Sidebar>
            <div className="flex flex-col ">
                <div className=" bg-white h-32">
                    <Header></Header>
                </div>
                <div className=" bg-white flex flex-wrap  gap-10 justify-center items-center">
                    {libros.map((l)=>(
                        <CompradosComp id ={l.id} key={l.id} titulo={l.titulo} imagen={l.imagen} autor={l.autor} anio_publicacion={l.anio_publicacion} numeroVentas={l.numeroVentas}></CompradosComp>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}
export default AllBooks