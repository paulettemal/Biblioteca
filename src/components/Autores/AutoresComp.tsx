interface AutorProps{
    nombre: string,
    numeroLibros: number, 
    src: string
}


function AutoresComp({nombre, numeroLibros, src}: AutorProps){
    return(
        <>
            <div className="flex flex-col ml-4">
                <div className="flex flex-row gap-5 m-4 rounded-full bg-gray-100">
                    <div className="h-15 w-15 rounded-full overflow-hidden">
                        <img src={src} className=" rounded-full"></img>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold mt-1">{nombre} </h4>
                        <h4 className="font-light" >{numeroLibros} books</h4>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AutoresComp;