export interface UsuarioProps{
    nombre:string;
}

function Usuario({nombre}: UsuarioProps){
    return(
        <div className="flex flex-col ml-2 ">
            <div className="h-20 w-20 rounded-3xl overflow-hidden mt-5 mb-5 ">
                <img src="yo.png" alt= "usuario" ></img>
            </div>
            <h5>Welcolme back</h5>
            <h4 className="font-bold text-xl">{nombre}</h4>

        </div>
    )
}
export default Usuario;
