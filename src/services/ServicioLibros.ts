export const extraerDatos = async () =>{
    try{
        const respuesta = await fetch("http://localhost:3000/libros");
        const dato = await respuesta.json();
        return dato
    }catch(err){
        console.log(err)
    }
}

export const extraerMasVendidos = async () =>{
    try{
        const respuesta = await fetch("http://localhost:3000/libros?_sort=numeroVentas&_order=desc");
        const dato = await respuesta.json();
        return dato;
    }catch(err){
        console.log(err)
    }
}

export const extraerDatosPorId = async (id: number) =>{
    try{
        const respuesta = await fetch(`http://localhost:3000/libros/${id}`);
        const dato = await respuesta.json();
        console.log(dato)
        console.log("el dato")
        return dato
    }catch(err){
        console.log(err)
    }
}

