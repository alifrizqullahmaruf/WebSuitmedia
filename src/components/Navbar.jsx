
const Navbar = () => {
  return (
    <div className="w-full font-medium text-white bg-orange-600 ">
    <div className="max-w-[1240px] mx-auto flex justify-between items-center py-4">
        <div id="logo">
            <img width={140} src="./src/assets/image/logo.png" alt="" />
        </div>
        <div id="menu" >
            <ul className="flex gap-4">
                <li className="duration-150 hover:border-white hover:border-b-4">Work</li>
                <li className="duration-150 hover:border-white hover:border-b-4">About</li>
                <li className="duration-150 hover:border-white hover:border-b-4">Services</li>
                <li className="duration-150 hover:border-white hover:border-b-4">Ideas</li>
                <li className="duration-150 hover:border-white hover:border-b-4">Careers</li>
                <li className="duration-150 hover:border-white hover:border-b-4">Contact</li>
            </ul>
        </div>
    </div>
    </div>

  )
}

export default Navbar