export interface TarjetaLibroProps{
    fuente: string;
    titulo: string;
    autor: string;
    genero: string;
}
function TarjetaLibro({fuente, titulo, autor, genero}: TarjetaLibroProps){
    return(
        <>
            <div className="flex flex-col w-40">
                
                <div className="flex justify-center">
                    <img src={fuente} alt={titulo} className="h-60 w-40 rounded-2xl"></img>
                </div>
                <div>
                    <div className="font-bold text-lg pt-2.5">
                        <h5>{titulo}</h5>
                    </div>
                    <div className="font-normal text-base pt-2.5">
                        {autor}
                    </div>
                    <div className="bg-gray-400 text-sm rounded-2xl w-fit p-0.5 pr-2.5 pl-2.5 font-light mt-1">
                        {genero}
                    </div>
                </div>

            </div>
        </>
    )
}
export default TarjetaLibro;