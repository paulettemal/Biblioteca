
import Header from "../components/LayoutComp/Header";
import ListaComprados from "../components/Comprados/ListaComprados";
import ListaLibros from "../components/LibrosLayout/ListaLibros";
import SeccionAutores from "../components/Autores/SeccionAutores";
import Sidebar from "../components/LayoutComp/Sidebar";


function Layout() {
    return (
        <div className="flex h-screen bg-white">
            <Sidebar></Sidebar>
            <div className="flex flex-col flex-1 w-full">
                <div className="flex">
                    <div className=" bg-white h-32 flex-1">
                        <Header></Header>
                    </div>
                </div>
                <div className=" bg-white w-full flex-1">
                    <ListaComprados></ListaComprados>
                </div>
                <div className=" bg-amber-900 w-full flex-1 flex flex-row">
                    <div className=" bg-white w-4/5 flex flex-row">
                        <ListaLibros></ListaLibros>
                    </div>
                    <div className="bg-white flex-1 ">
                        <SeccionAutores></SeccionAutores>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;