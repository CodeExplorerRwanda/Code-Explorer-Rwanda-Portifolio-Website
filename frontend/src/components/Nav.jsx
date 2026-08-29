import {FaHome, FaInfoCircle, FaServicestack, FaBriefcase,FaNewspaper, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Nav = () => {
    
  return (
      <div>
          <div className="bg-white flex">
              <div >
                  <img src={logo}  alt="Logo" />
                  <h1>Code Explorer Rwanda</h1>
              </div>

              <div>
                   <Link><FaHome /> Home</Link>
                   <Link><FaInfoCircle /> About</Link>
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