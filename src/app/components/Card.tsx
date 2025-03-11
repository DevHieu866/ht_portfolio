"use client"
import React from 'react'

const Card = () => {
    const projects = [
      {
        title: "Chat App",
        description: "MERN stack application that features real-time messaging using web sockets.",
        srcLink: "https://github.com/DevHieu866/chatapp",
        imageLink: "/Chat_App.png",
        demoLink: "https://www.youtube.com/watch?v=GqFlemDGzic",
      },      
      {
        title: "Product Management",
        description: "React app with RESTful apis that allows CRUD operations on stored products.",
        srcLink: "https://github.com/DevHieu866/product-management-website",
        imageLink: "/PM_App.png",
        demoLink: "https://www.youtube.com/watch?v=bVuWA0IKSQI",
      },
      {
        title: "Movie App",
        description: "React app that fetches movies from an external api.",
        srcLink: "https://github.com/DevHieu866/MovieWebsite",
        imageLink: "/Movie_App.png",
        demoLink: "https://www.youtube.com/watch?v=foHfB-unF74",
      },      
      {
        title: "Space Simulation",
        description: "Space landing simulation using C++ and Openframeworks.",
        imageLink: "/SL_App.png",
        demoLink: "https://www.youtube.com/watch?v=vEACr_ub84A",
    }
    ]
    
  return (
    <div className="flex flex-col items-center justify-center w-3/4 h-full">
      <div className="flex flex-col space-y-4 w-[300px] md:w-[600px]">
        {projects.map((proj, index) =>(
          <div key = {index} className="flex h-[400px] md:h-[500px] sticky top-[150px] snap-center" style={{ paddingTop: `calc(50px + ${index * 20}px)`}}>
            <div className="relative w-full h-full rounded-xl">              
              <div className="flex flex-col rounded-xl border border-rose-400 justify-between items-center absolute w-full h-full bg-black/90 -bottom-0 opacity-0 hover:opacity-100">              
                <div id="projDescription" className="flex flex-col items-center justify-center">
                  <h1 className="p-4 text-xl text-slate-50 md:text-3xl">
                  {proj.title}
                  </h1>
                  <span className="p-4 text-lg text-slate-50 md:text-2xl w-3/4">
                    {proj.description}
                  </span>
                </div>

                <div id="projLinks" className="flex mb-20 p-4 space-x-8">
                  {proj.demoLink? (
                    <button onClick={() => window.open(proj.demoLink,`_blank`)} className="bg-rose-400 hover:bg-white text-black font-bold py-2 px-4 rounded">
                    Demo
                    </button>
                  ):("")}

                  {proj.srcLink? (
                    <button onClick={() => window.open(proj.srcLink,`_blank`)} className="bg-rose-400 hover:bg-white text-black font-bold py-2 px-4 rounded">
                    Github
                    </button>
                  ):("")}
                </div>

              </div>

              <img src={proj.imageLink} alt="test" className="w-full h-full rounded-xl object-cover md:object-fill"/>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
