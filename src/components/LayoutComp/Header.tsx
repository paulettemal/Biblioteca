

function Header(){

    return(
        <>
            <div className="flex flex-row gap-x-270 p-15">
                <h2 className="font-bold text-4xl ">Kindle</h2>
                
                <form >
                    <label>
                        <input type="text" placeholder="Search yoour books"></input>
                    </label>
                </form>

            </div>
        </>
    )
}
export default Header;