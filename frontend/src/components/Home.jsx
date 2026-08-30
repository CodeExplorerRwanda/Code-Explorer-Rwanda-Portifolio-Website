// import bg_image from "../assets/bg-image.jpeg";

import { FaArrowRight, FaCode, FaFly, FaGamepad, FaInternetExplorer, FaServer, FaShare } from "react-icons/fa";

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
                           
                         <div>
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
                                  <p className="ms-18 w-1/2 text-gray-700 font-light">Modern websites and web-based tools that help your business look credible and perform smoothly.</p>
                            </div>
                        
                            <div className="mt-3">
                                      <p className="mt-4 bg-sky-200 p-1 h-9 w-46 text-center rounded-lg font-bold text-sky-500">FROM 250, 000 FRW</p>

                                      <div className="mt-4 grid grid-cols-2 mb-4">
                                       {/* landinng page table */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                        {/* Graphic design portal */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                        
                                        {/* photography portal */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                        
                                        {/* video graphy protal */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                        
                                        {/* digital marketing portal */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                        
                                        {/* Coorporate office documentation */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                        
                                        {/* cloud hosting */}
                                        <div>

                                          <div className="flex justify-between">
                                            <p className="text-lg text-gray-600">Landing Page - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              150,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              250,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Landing Page - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              350,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              300,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Business Website - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              700,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              900,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">E-commerce - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>


                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Simple</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              500,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Professional</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              800,000 FRW
                                            </p>
                                          </div>

                                          <div className="border border-dashed border-gray-400"></div>

                                          <div className="flex justify-between mt-3">
                                            <p className="text-lg text-gray-600">Web App / Dashboard - Advanced</p>
                                            <p className="text-lg text-gray-600 font-bold mb-3">
                                              1,500,000+ FRW
                                            </p>
                                          </div>

                                        </div>
                                      </div>
                              </div>
                            </div>
                       </div>
                     </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Home;