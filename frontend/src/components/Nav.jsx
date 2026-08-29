import {FaHome, FaInfoCircle, FaServicestack, FaBriefcase,FaNewspaper, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Nav = () => {
    
  return (
      <div>
          <div>
              <div>
                  <img src={logo}  alt="Logo" />
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