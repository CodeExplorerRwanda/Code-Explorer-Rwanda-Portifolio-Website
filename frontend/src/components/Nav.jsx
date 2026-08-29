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
                   <Link className="inline-flex text-gray-500 text-lg"><FaInfoCircle /> About</Link>
                   <Link><FaServicestack /> Services</Link>
                   <Link><FaBriefcase /> Blog</Link>
                   <Link><FaNewspaper /> Portifolio</Link>
                   <Link><FaEnvelope /> Contact</Link>
              </div>
          </div>
     </div>
    )
}

export default Nav;