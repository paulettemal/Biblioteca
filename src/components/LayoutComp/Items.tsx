import { Book, Home, LogOut, User } from "lucide-react"
import { useNavigate } from "react-router-dom"


function Items(){
    const navigate = useNavigate();
    const llevaALibros= ()=>{
        navigate('/all-books')
    }
    const llevaAhome=()=>{
        navigate('/home')
    }
    return(
        <>
            <div className="flex flex-col pl-4 pt-15">
                <button className="flex flex-row gap-5 pt-5">
                    <div className= "bg-yellow-500 text-white h-6 w-6 rounded-2xl">↙</div>
                    <h6>Kindle</h6>
                </button>
                <button className="flex flex-row gap-5 pt-5" onClick={llevaAhome}>
                    <Home />
                    <h6>Home</h6>
                </button>
                <button className="flex flex-row gap-5 pt-5" onClick={llevaALibros}>
                    <Book ></Book>
                    <h6>All books</h6>
                </button>
                <button className="flex flex-row gap-5 pt-5">
                    <User fill="black"></User>
                    <h6>Profile</h6>
                </button>
                <button className="flex flex-row gap-5 pt-5">
                    <LogOut ></LogOut>
                    <h6>Logout</h6>
                </button>
                <img src="amazon.png" className="pt-31 w-25"></img>
            </div>
        </>
    )
}
export default Items