import {FaHome, FaInfoCircle, FaServicestack, FaBriefcase,FaNewspaper, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Nav = () => {
    
  return (
      <div>
          <div className="bg-white flex justify-between max-w-7xl mx-auto">
              <div className="p-3 flex">
                  <img src={logo}  alt="Logo" className="w-15 h-15 rounded-full"/>
                  <h1 className="mt-5 text-2xl font-bold ms-3"><span className="text-blue-600">Code</span> <span className="text-yellow-600">Explorer</span> <span className="text-green-600">Rwanda</span></h1>
              </div>

              <div className="flex space-x-4 p-3 mt-3">
                   <Link className="inline-flex text-gray-500 text-lg"><FaHome className="me-3 mt-1 text-gray-500" /> <span className="font-bold">Home</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg"><FaInfoCircle className="me-3 mt-1" /> <span className="font-bold">About</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg"><FaServicestack className="me-3 mt-1"/><span className="font-bold">Services</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg"><FaBriefcase className="me-3 mt-1"/> <span className="font-bold">Blog</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg"><FaNewspaper className="me-3 mt-1"/> <span className="font-bold">Portifolio</span></Link>
                   <Link className="inline-flex text-gray-500 text-lg"><FaEnvelope className="me-3 mt-1"/> <span className="font-bold">Contact</span></Link>
              </div>
          </div>
     </div>
    )
}

export default Nav;