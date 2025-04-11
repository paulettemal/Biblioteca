import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Libro } from "../../intefaces/InterfazLibro";
import { extraerDatosPorId } from "../../services/ServicioLibros";
import { Book } from "lucide-react";

function DetalleLibro() {
    const { id } = useParams();
    const [libro, setLibro] = useState<Libro | null>(null);
    useEffect(() => {
        const cargarLibro = async () => {
            try {
                const respuesta = await extraerDatosPorId(Number(id));
                setLibro(respuesta);
            } catch (error: any) {
                console.error("Error al cargar libro:", error);
            }
        };
        cargarLibro();
    }, [id]);

    if (!libro) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-red-500">Error al cargar los detalles del libro.</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden md:max-w-3xl lg:max-w-4xl">
                <div className="md:flex">
                    <div className="md:w-1/3 lg:w-1/3 p-8 flex justify-center items-center">
                        <div className="relative w-48 h-64 rounded-md overflow-hidden shadow-md">
                            <img src={libro.imagen} alt={libro.titulo} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="md:w-2/3 lg:w-2/3 p-8">
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-indigo-100 text-indigo-700 text-sm rounded-full px-3 py-1">
                                    {libro.genero}
                                </div>
                                <div className="flex items-center text-yellow-500">
                                    <Book size={16} className="mr-1" />
                                    <span className="text-sm">{libro.numeroVentas} ventas</span>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{libro.titulo}</h1>
                            <h2 className="text-lg text-gray-600 mb-4">por {libro.autor}</h2>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">Descripción</h3>
                            <p className="text-gray-700 leading-relaxed">{libro.sinopsis}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <h4 className="text-sm text-gray-500 uppercase tracking-wide">Año de publicación</h4>
                                <p className="font-medium text-gray-800">{libro.anio_publicacion}</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 uppercase tracking-wide">ISBN</h4>
                                <p className="font-medium text-gray-800">{libro.isbn}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetalleLibro;