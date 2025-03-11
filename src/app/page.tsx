import { ChevronsDown } from "lucide-react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center">

      <Navbar/>

      <div className="flex flex-col p-4 w-full text-wc h-screen relative justify-between items-center">
        <div className="mt-40 text-3xl/tight md:text-4xl/tight lg:text-5xl/tight tracking-wide">
          Hello my name is <span className="border-b-4 border-rc">Hieu.</span> 
          <br/>
          Welcome to my portfolio!
        </div>
        <div className="flex justify-center items-center mb-20">
          <a href="#projects" className="flex">
            <ChevronsDown className="size-14 md:size-24 animate-bounce text-rc "/>
          </a>
        </div>

      </div>

      {/* Transition Div */}
      <div className="h-[150px] w-full bg-gradient-to-t from-slate-700 to-bc"/>

      <div id="projects" className="p-8 h-full w-full flex flex-col items-center scroll-mt-4 bg-slate-700">
        <h1 className="flex text-5xl p-6 text-wc border-b-4 border-rc mb-10 sticky top-[50px]">
          Projects
        </h1>
        <Card/>
      </div>

      {/* Transition Div */}
      <div className="h-[150px] w-full bg-gradient-to-b from-slate-700 to-bc"/>

      <div id="about" className="flex flex-col z-10 items-center p-4 h-screen w-full mt-40 space-y-4 scroll-mt-8">
        <div className="flex mx-10">
          <h1 className="flex text-5xl p-6 text-wc border-b-4 border-rc mb-10">
            About Me
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 2xl:w-1/2 space-y-8">
          <p 
            className="flex p-4 w-full md:w-2/3 
            text-wc text-xl/tight md:text-2xl/tight tracking-wide mx-10 animate-slide animation-timeline-view"
          >
            I am a software engineer with a passion for designing and developing full stack applications.
            My main tech stack is MERN but I do enjoy experimenting on frameworks like Nextjs.  
            Outside of coding, I enjoy watching new shows and meeting up with friends.
          </p>

          <img src="/pfp.jpg" alt="test2" className="flex items-center rounded-full size-52 lg:size-80"/>
        </div>
      </div>

      {/* Transition Div */}
      <div className="h-[150px] w-full z-0 bg-gradient-to-t from-slate-700 to-bc mt-10"/>

      <div id="contact" className="p-8 h-full flex flex-col w-full items-center scroll-mt-4 bg-slate-700">

          <h1 className="flex text-5xl p-6 text-wc border-b-4 border-rc mb-10">
            Contacts
          </h1>

          <span className="flex p-4 text-wc text-xl/tight md:text-2xl/tight tracking-wide"> 
          Feel free to leave me a message!
          </span>

          <div className="flex space-x-10 p-4 ">
            <button type="button">
              <a href="https://github.com/DevHieu866" className="button">
                <img src="/GithubIcon.png" alt="test" className="size-12"/>
              </a>
            </button>

            <button type="button">
              <a href="https://www.linkedin.com/in/hieu-tran-8563a7322/" className="button">
                <img src="/LinkedInIcon.png" alt="test" className="size-12"/>
              </a>
            </button>
          </div>
          <ContactForm/>

      </div>


    </div>
  );
}
