function Navbar() {
    return (
    <header className="bg-orange-600 fixed w-full top-0">
        <div className="container flex items-center justify-between py-1">
          <h1 className="ml-6 text-3xl font-bold hover:cursor-pointer">Logo</h1>
          <nav>
            <ul className="flex gap-10 ">
              <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-orange-700 hover:text-white">
                Home
              </li>
              <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-orange-700 hover:text-white">
                About
              </li>
              <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-orange-700 hover:text-white">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;