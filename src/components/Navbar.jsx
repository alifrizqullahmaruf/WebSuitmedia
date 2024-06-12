
const Navbar = () => {
  return (
    <div className="w-full bg-orange-600 text-white font-medium">
    <div className="max-w-[1240px] mx-auto flex justify-between items-center py-4">
        <div id="logo">
            <img width={140} src="./src/assets/image/logo.png" alt="" />
        </div>
        <div id="menu" >
            <ul className="flex gap-4">
                <li className="border-b-4 border-white">Work</li>
                <li className="border-b-4 border-white">About</li>
                <li className="border-b-4 border-white">Services</li>
                <li className="border-b-4 border-white">Ideas</li>
                <li className="border-b-4 border-white">Careers</li>
                <li className="border-b-4 border-white">Contact</li>
            </ul>
        </div>
    </div>
    </div>

  )
}

export default Navbar