// import bg_image from "../assets/bg-image.jpeg";

import { FaAddressBook, FaArrowDown, FaArrowRight, FaBook, FaBrain, FaCamera, FaCode, FaEnvelope, FaFly, FaGamepad, FaInternetExplorer, FaParagraph, FaQuestion, FaServer, FaShare, FaVideo } from "react-icons/fa";

const Home = () => {

    return (
        <div className=" bg-sky-50">
            <div>
                <div>
                    {/* <img src={bg_image} className="object-cover w-full h-200"/> */}
                    <div className="w-full h-150 bg-black">
                      <div className="max-w-5xl mx-auto mt-30 pt-30 pe-10">
                         <h1 className="text-white font-bold text-6xl">We build clear websites, polished branding, and smart marketing.</h1>
                         <p className="text-white mt-4 text-lg font-light">Code Explorer Rwanda builds clean websites, storng branding, and simple digital marketing for businesses and creators who want to grow with confidence</p>

                         <div className="flex space-x-4 mt-15">
                            <button className="bg-sky-500 text-white font-bold p-4 rounded-full hover:bg-sky-600 transition-colors">Start your Project</button>
                            <button className="border border-sky-100 p-4 rounded-full font-bold text-white hover:bg-white hover:text-black transition duration-200">Explorer Our Services</button>
                         </div>
                      </div>
                  </div>
                  <div className="max-w-7xl mx-auto mt-5">
                       <div>
                            <h1 className="text-center font-bold text-sky-500">WHAT WE DO</h1>
                            <h1 className="text-center font-bold text-4xl">Clear service that help your brand stand out.</h1>
                            <div className="border-5 border-b border-sky-500 w-20 relative left-150 top-4"></div>
                            <div className="mt-12 flex space-x-10">
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <FaCode className="ms-1 text-xl text-sky-500 font-bold" />
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">Clear Websites</h1>
                                      <p className="mt-1 text-gray-700">Professional websites that explain your business in seconds and work n every screen.</p>
                                  </div>
                                  
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <FaGamepad className="ms-1 text-xl text-sky-500 font-bold" />
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">Brand Design</h1>
                                      <p className="mt-1 text-gray-700">Logos, visuals, and social media assets that make your brand feel trusted and modern.</p>
                                  </div>
                                  
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <FaShare className="ms-1 text-xl text-sky-500 font-bold" />
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">Digital Growth</h1>
                                      <p className="mt-1 text-gray-700">SEO, ads, and content support that help more people discover your business online.</p>
                                  </div>
                                  
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <FaServer className="ms-1 text-xl text-sky-500 font-bold" />
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">Reliable hosting</h1>
                                      <p className="mt-1 text-gray-700">Domains, secure hosting, and simple support so your website stays online and safe.</p>
                                  </div>
                            </div>
                       </div>
                       
                       <div className="mt-10">
                            <h1 className="text-center font-bold text-sky-500">HOW IT WORKS</h1>
                            <h1 className="text-center font-bold text-4xl">Simple steps from idea to launch.</h1>
                            <div className="border-5 border-b border-sky-500 w-20 relative left-150 top-4"></div>
                            <div className="mt-12 flex space-x-10">
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <p className="ms-1 text-xl text-sky-500 font-bold">01</p>
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">Tell us your goal</h1>
                                      <p className="mt-1 text-gray-700">We start with a simple conversation about your business, target audience, and what you want people to do.</p>
                                  </div>
                                  
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <p className="ms-1 text-xl text-sky-500 font-bold">02</p>
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">We design the right solution</h1>
                                      <p className="mt-1 text-gray-700">We create a website, brand, or marketing plan that fits your needs and your budget.</p>
                                  </div>
                                  
                                  <div>
                                      <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                        <p className="ms-1 text-xl text-sky-500 font-bold">03</p>
                                      </div>
                                      <h1 className="mt-3 text-lg font-bold">You launch with confidence</h1>
                                      <p className="mt-1 text-gray-700">We deliver a polished result, guide you through it, and help you grow from day one.</p>
                                  </div>
                            </div>
                       </div>
                       
                       <div className="mt-10">
                            <h1 className="text-center font-bold text-sky-500">WHO WE SERVE</h1>
                            <h1 className="text-center font-bold text-4xl">Built for people who want to be easy to trust online.</h1>
                            <div className="border-5 border-b border-sky-500 w-20 relative left-150 top-4 mb-"></div>
                            <div className="mt-12 grid grid-cols-2 space-y-4 space-x-10">
                                  <div>
                                      <h1 className="mt-3 text-lg font-bold">For businesses</h1>
                                      <p className="mt-1 text-gray-700">Shops, clinics, agencies, and service providers that want a strong online presence.</p>
                                  </div>
                                  
                                  <div>
                                      <h1 className="mt-3 text-lg font-bold">For startups</h1>
                                      <p className="mt-1 text-gray-700">New brands that need a professional platform to look serious and attract clients.</p>
                                  </div>
                                  
                                  <div>
                                      <h1 className="mt-3 text-lg font-bold">For creators</h1>
                                      <p className="mt-1 text-gray-700">Freelancers, coaches, and content makers who want a simple digital home.</p>
                                  </div>
                            </div>
                       </div>
                       
                       <div className="mt-10">
                            <h1 className="text-center font-bold text-sky-500">WHO WE SERVE</h1>
                            <h1 className="text-center font-bold text-4xl">Built for people who want to be easy to trust online.</h1>
                            <div className="border-5 border-b border-sky-500 w-20 relative left-150 top-4"></div>
                            <div className="mt-12 grid grid-cols-2 space-y-4 space-x-10">
                                  <div>
                                      <h1 className="mt-3 text-lg font-bold">For businesses</h1>
                                      <p className="mt-1 text-gray-700">Shops, clinics, agencies, and service providers that want a strong online presence.</p>
                                  </div>
                                  
                                  <div>
                                      <h1 className="mt-3 text-lg font-bold">For startups</h1>
                                      <p className="mt-1 text-gray-700">New brands that need a professional platform to look serious and attract clients.</p>
                                  </div>
                                  
                                  <div>
                                      <h1 className="mt-3 text-lg font-bold">For creators</h1>
                                      <p className="mt-1 text-gray-700">Freelancers, coaches, and content makers who want a simple digital home.</p>
                                  </div>
                            </div>
                       </div>
                      
                      
                       <div className="mt-10">
                            <h1 className="text-center font-bold text-sky-500">CHOOSE A TIER</h1>
                            <h1 className="text-center font-bold text-4xl">Pick a service tier that fits your goals and budget.</h1>
                            <div className="border-5 border-b border-sky-500 w-20 relative left-150 top-4"></div>
                            <p className="text-center font-light text-gray-700 w-1/2 ms-75 mt-6">Choose one service or build a full digital package with clear options, transparent pricing, and a direct path to order.</p>
                           <div className="mt-3">
                               <div className="bg-sky-600 w-50 p-2 rounded-full">
                                    <p className="text-center font-bold text-white">FLEXIBLE PACKAGES</p>
                               </div>
                              
                               <div className="flex">
                                   <div className="mt-2">
                                      <h1 className="font-bold text-lg">Need a full digital launch ?</h1>
                                      <p className="text-gray-700 text-lg">We can combine branding, design, growth, and support into one focused package that feels simple and poffesional.</p>
                                   </div>
                                   <button className="inline-flex bg-black text-white p-2 h-12 ms-3 rounded-full hover:bg-sky-500 transition-colors">Build a full digital package <FaArrowRight className="ms-3 mt-2 hover:translate-x-1.5 transition duration-200" /></button>
                               </div>
                           </div>
                           
                         <div className="grid grid-cols-2 mb-4 space-x-15 space-y-15">
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaCode className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Web Development</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Websites & Web Apps</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">Modern websites and web-based tools that help your business look credible and perform smoothly.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 250, 000 FRW</p>

                                       {/* landinng page table */}
                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              450,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce store</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web app/ dashboard</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Build with web development package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                            
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaAddressBook className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Graphic design</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Branding & Visuals</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">Proffesional logos, branded visuals, and print materials that make your business look polished.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 80, 000 FRW</p>

                                       {/* landinng page table */}
                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Logo Design</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              40,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Brand kit</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              100,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business cards</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              15,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Flayers & brochures</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              10,000 FRW
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Create this graphic design package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                            
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaCamera className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Photography</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Product & Business photos</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">Clear image editing, you just give us your image and we transofrm it into high image vue.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 10, 000 FRW</p>

                                       {/* landinng page table */}
                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Product photos</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              10,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Corporate portraits</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              20,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Event coverage</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              80,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Photo editing</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              included
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Book this photography package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                            {/* videography */}
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaVideo className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Videography</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Reels & Promote video</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">Short promotional videos and storytelling content that help people connect with your brand quickly.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 250, 000 FRW</p>

                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Social reel</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              30,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Product video</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              100,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Corporate video</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              100,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Editing & delivery</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              included
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Book this videography package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                            {/* digital marketing */}
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaShare className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Digital marketing</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Websites & Web Apps</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">SEO, content support, and online visibility services that help more people find your business.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 250, 000 FRW</p>

                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">SEO setup</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW/mo
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Website copy</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              70,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Social content plan</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              60,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Adds Support</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              170,000 FRW
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Grow with digital marketing package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                            
                            {/* Corporate office */}
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaBook className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Corporate office & documentation</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Admin & professional docs</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">Professional business documents, reports, and formal materials that help your company look organized.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 50, 000 FRW</p>

                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Business profile</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              50,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Proposal & report design</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              40,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Company documents</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              50,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Document formating</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              included
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Get this documentation package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                            {/* Cloud hosting & domain registry */}
                            <div className="mt-12 space-y-4 space-x-10">
                              <div>
                                <div className="flex space-x-6">
                                 <div className="bg-sky-100 p-4 w-15 rounded-xl">
                                      <FaCode className="ms-1 text-xl text-sky-500 font-bold" />
                                  </div>

                                  <div className="flex space-x-3">
                                     <h1 className="font-bold">Cloud hosting & domain registry</h1>
                                      <div className="bg-sky-200 p-1 h-8 rounded-lg font-bold text-sky-500">
                                        <p className="text-sm">Secure online presence</p>
                                      </div>
                                  </div>
                                </div>
                                  <p className="ms-18  text-gray-700 font-light">Reliable domains, hosting, business emails, and backups that keep your website active and protected.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 15, 000 FRW</p>

                                       {/* landinng page table */}
                                        <div className="mt-3">

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Domain registration</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                               15,000 RWF / year
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Hosting package</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                               40,000 RWF / year
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business email</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                                25,000 RWF / year
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Backup support</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                               20,000 RWF / year
                                            </p>
                                          </div>

                                          <div className="mt-5">
                                            <button className="inline-flex justify-center text-center bg-black text-white w-full p-2 py-3 rounded-full hover:bg-sky-500 transition duration-150 font-bold">Choose this hosting package <FaArrowRight className="ms-4 mt-2 "/> </button>
                                          </div>
                                        </div>
                                    </div>
                            </div>
                       </div>
                     </div>

                    <div className="mt-7 max-w-5xl mx-auto">
                         <h1 className="text-center font-bold text-sky-500">FAQ</h1>
                         <h1 className="text-center font-bold text-4xl">Helpful answers for first-time visitors.</h1>
                        <div className="border-5 border-b border-sky-500 w-20 relative left-150 top-4"></div>
                        <div className="mt-7">
                           <div className="mb-4">
                                <div className="flex space-x-3 border-b-2 border-dashed border-gray-400">
                                    <FaQuestion className="border rounded-full border-sky-500 text-sky-500 mt-1" /> <h1 className="font-bold text-xl text-gray-700">What kind of bussiness do you help ?</h1>
                                    <FaArrowDown className="flex justify-end items-end"/>
                               </div>
                               <div className="mt-3 ms-12">
                                <p className="text-gray-800 text-lg">We support small businesses, startups, schools, shops, and creative professionals, who want a modern and trustworthy online presence.</p>
                               </div>
                           </div>
                           
                           <div className="mb-4">
                                <div className="flex space-x-3 border-b-2 border-dashed border-gray-400">
                                    <FaQuestion className="border rounded-full border-sky-500 text-sky-500 mt-1" /> <h1 className="font-bold text-xl text-gray-700">Can I start with one service only ?</h1>
                                    <FaArrowDown className="flex justify-end items-end"/>
                               </div>
                               <div className="mt-3 ms-12">
                                <p className="text-gray-800 text-lg">Yes. Many clients begin with a website or logo and later add marketing, hosting or more design support.</p>
                               </div>
                           </div>
                           
                           <div className="mb-4">
                                <div className="flex space-x-3 border-b-2 border-dashed border-gray-400">
                                    <FaQuestion className="border rounded-full border-sky-500 text-sky-500 mt-1" /> <h1 className="font-bold text-xl text-gray-700">Do you help with mobile-friendly websites ?</h1>
                                    <FaArrowDown className="flex justify-end items-end"/>
                               </div>
                               <div className="mt-3 ms-12">
                                <p className="text-gray-800 text-lg">Absolutely every website we build is designed to look clear and easy to use on mobil, tablet and desktop.</p>
                               </div>
                           </div>
                           
                           <div className="mb-4">
                                <div className="flex space-x-3 border-b-2 border-dashed border-gray-400">
                                    <FaQuestion className="border rounded-full border-sky-500 text-sky-500 mt-1" /> <h1 className="font-bold text-xl text-gray-700">What kind of bussiness do you help ?</h1>
                                    <FaArrowDown className="flex justify-end items-end"/>
                               </div>
                               <div className="mt-3 ms-12">
                                <p className="text-gray-800 text-lg">We support small businesses, startups, schools, shops, and creative professionals, who want a modern and trustworthy online presence.</p>
                               </div>
                           </div>
                           
                           <div className="mb-4">
                                <div className="flex space-x-3 border-b-2 border-dashed border-gray-400">
                                    <FaQuestion className="border rounded-full border-sky-500 text-sky-500 mt-1" /> <h1 className="font-bold text-xl text-gray-700">How long does a project take ?</h1>
                                    <FaArrowDown className="flex justify-end items-end"/>
                               </div>
                               <div className="mt-3 ms-12">
                                <p className="text-gray-800 text-lg">Simple projects can be ready in few days, while larger builds may take a couple of weeks, it depend on scope.</p>
                               </div>
                           </div>

                        </div>
                    </div>
                    <div className="bg-sky-100 mt-12 p-5 rounded-2xl border border-sky-500 mb-9 flex justify-between">
                       <div>
                           <h1 className="ms-10 text-3xl text-gray-700 font-bold">Ready to build something clear and professional ?</h1>
                           <p className="mt-3 text-lg text-gray-800">Let us create a website and digital experience that helps your audience understand your business quickly.</p>
                       </div>
                       <div className="mt-7 me-3 ">
                             <button className="bg-sky-500 py-3 px-5 rounded-full text-white inline-flex hover:bg-sky-600 transition duration-200 hover:translate-y-1"><FaEnvelope className="mt-1 me-3"/> Talk to us</button>
                       </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Home;