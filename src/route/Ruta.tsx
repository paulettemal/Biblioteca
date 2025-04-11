import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBooks from "../pages/AllBooks";
import  Home  from "../pages/Home";
import DetalleLibro from "../components/LibroIndividual/DetalleLibro";

function Ruta(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path= '/all-books' element={<AllBooks/>}/>
                    <Route path="/libro/detalleLibro/:id" element={<DetalleLibro />} />
                    <Route path="*" element={<>Página no encontrada</>} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default Ruta;