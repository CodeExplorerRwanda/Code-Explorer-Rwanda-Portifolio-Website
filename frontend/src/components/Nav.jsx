import {FaHome, FaInfoCircle, FaServicestack, FaBriefcase,FaNewspaper, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Nav = () => {
    
  return (
      <div className="fixed top-0 left-0 right-0 bottom-0">
          <div className="bg-white flex justify-between max-w-7xl mx-auto">
              <div className="p-3 flex">
                  <img src={logo}  alt="Logo" className="w-15 h-15 rounded-full hover:scale-105 transition duration-200"/>
                  <div>
                     <h1 className="mt-2 text-2xl font-bold ms-3"><span className="text-blue-600">Code</span> <span className="text-yellow-600">Explorer</span> <span className="text-green-600">Rwanda</span><span className="text-gray-600"> Ltd</span></h1>
                     <p className="ms-3 text-gray-600">ENGINEERING DIGITAL SUCCESS</p>
                  </div>
              </div>

              <div className="flex space-x-4 p-3 mt-3">
                   <Link className="inline-flex text-gray-500 text-lg hover:text-sky-500 transition-colors"><FaHome className="me-3 mt-1" /> <span className="font-bold">Home</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg hover:text-sky-500 transition-colors"><FaInfoCircle className="me-3 mt-1" /> <span className="font-bold">About</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg hover:text-sky-500 transition-colors"><FaServicestack className="me-3 mt-1"/><span className="font-bold">Services</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg  hover:text-sky-500 transition-colors"><FaBriefcase className="me-3 mt-1"/> <span className="font-bold">Blog</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg  hover:text-sky-500 transition-colors"><FaNewspaper className="me-3 mt-1"/> <span className="font-bold">Portifolio</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg  hover:text-sky-500 transition-colors"><FaEnvelope className="me-3 mt-1"/> <span className="font-bold">Contact</span></Link>
                </div>
                <div>

            <div className="mt-3 p-3">
               <Link className="text-white text-lg bg-sky-500 font-bold p-3 ms-4 mb-3 rounded-lg hover:bg-sky-600 transition-colors">Get started</Link>
            </div>    
               </div>
          </div>
     </div>
    )
}

export default Nav;