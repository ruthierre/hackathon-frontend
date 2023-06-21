export default function Header() {
    return (
        <nav className=" bg-yellow-200 box-border h-16 flex justify-end items-center
        bg-gradient-to-r from-yellow-500  via-red-400   to-pink-500" p-6>
            <div className=" justify-around space-x-8 px-16">
                <button  className=" text-white text-xl">AJUDA</button>
                <button  className=" text-white text-xl">FAQ</button>
                <button  className=" text-white text-xl">Planos</button>   
            </div> 
        </nav>
    )
}