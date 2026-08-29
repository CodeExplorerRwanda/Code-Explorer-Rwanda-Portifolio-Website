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
                   <Link>Home</Link>
                   <Link>About</Link>
                   <Link>Services</Link>
                   <Link>Blog</Link>
                   <Link>Portifolio</Link>
                   <Link>Contact</Link>
              </div>
          </div>
     </div>
    )
}