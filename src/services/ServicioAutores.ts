export const extraerAutores= async ()=>{
    try{
        const respuesta = await fetch("http://localhost:3000/autores");
        const data = respuesta.json();
        return data;
    }catch(err){
        console.log(err)
    }
}