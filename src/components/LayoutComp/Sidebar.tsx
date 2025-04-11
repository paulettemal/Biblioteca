
import Usuario from "../Usuario/Usuario";
import Items from "./Items";

function Sidebar(){
    
    return(
        <>
            <div className="flex flex-col w-1/8 bg-white gap-15 h-screen pr-10 pt-15 ">
                <div className="w-full bg-gradient-to-r from-amber-000 to-stone-300 h-64 p-5 pl-7 flex-shrink-0 rounded-r-4xl ">
                    <Usuario nombre="Paulette" />
                </div>
                <div className="w-full bg-white flex-shrink-0 p-5 m-10 flex-1 mr-5 ml-5">
                    <Items></Items>
                </div>
            </div>
        </>
    )
}
export default Sidebar;