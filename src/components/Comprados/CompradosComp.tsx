import { useNavigate } from "react-router-dom";

export interface CompradosCompProps{
    titulo: string,
    imagen: string,
    autor: string,
    anio_publicacion: number
    numeroVentas: number
    id:number
}

function CompradosComp({titulo, imagen, autor, anio_publicacion, numeroVentas, id}: CompradosCompProps){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/libro/detalleLibro/${id}`);
    };

    return (
        <>
            
            <div className="relative flex flex-col" onClick={handleClick}>
                <div className="relative flex flex-col bg-gradient-to-r from-blue-200 to-blue-100 pl-43 w-90 mt-15 pb-18 h-40 rounded-2xl">
                    <h3 className="mt-7 font-bold text-lg mr-4">{titulo}</h3>
                    <div className="flex flex-row">
                        <h4>{autor} - </h4>
                        <h4>{anio_publicacion}</h4>
                    </div>
                    <h5>Ventas: {numeroVentas} </h5>
                </div>
                <img src={imagen} alt={titulo} className="ml-5 absolute w-35 h-50 rounded-2xl bg-amber-900"></img>
            </div>
        </>
    )
}
export default CompradosComp
