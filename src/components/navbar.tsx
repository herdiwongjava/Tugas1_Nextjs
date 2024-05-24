function Navbar() {
    return (
    <header className="bg-orange-600 fixed w-full top-0 z-10">
        <div className="container m-auto flex items-center justify-between py-1">
          <h1 className="ml-6 text-3xl font-bold hover:cursor-pointer">e-Her</h1>
          <nav>
            <ul className="flex">
              <a href="#">
                <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-orange-700 hover:text-white">
                Home
                </li>
              </a>
              <a href="https://github.com/herdiwongjava/Tugas1_Nextjs.git" target="_blank">
                <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-orange-700 hover:text-white">
                About
                </li>
              </a>
              <a href="https://www.linkedin.com/in/eko-herdianto-42a789260/" target="_blank">
                <li className="rounded-md px-5 py-3 hover:cursor-pointer hover:bg-orange-700 hover:text-white">
                  Contact
                </li>
              </a>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar