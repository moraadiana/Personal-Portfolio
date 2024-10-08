import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Experience() {
  return (
    <div id="experience" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Experience
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
        <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            
            <h3 class="items-center mb-1 text-lg font-semibold  text-white "> 
                
               Software Developer
            </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
            
            AppKings Solutions Ltd, Nairobi, Kenya | Apr 2024 – Present 
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400">
          
            I managed Office 365 backend functions, including SharePoint and user training, while designing and maintaining software systems with C#, .NET, JavaScript, AL, SQL, and HTML/CSS. I provided technical support, resolved hardware and software issues, and created documentation and SOPs for efficient IT operations.

            </p>
           
          </li>
        <li data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            ICT Support Officer
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
            Bulkstream Ltd, Mombasa, Kenya | Nov 2021 – Feb 2024
            </time>
            <p class="text-base font-normal text-gray-400">
            I managed user accounts and system performance, performed preventive maintenance on ICT equipment, and developed a gate pass system that boosted efficiency by 90%. I handled hybrid server environments, supported cybersecurity measures, and addressed user queries while tracking incidents effectively.
            </p>
           
          </li>
      
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Quality and Risk Management Intern
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
            KPMG, Nairobi, Kenya | Apr 2019 – Jul 2019
            </time>
            <p class="text-base font-normal text-gray-400">
            I significantly improved data accuracy and efficiency by 20% through streamlined data management practices. Additionally, I supported compliance initiatives by maintaining rigorous data documentation to meet audit requirements effectively.

            </p>
            
          </li>
          
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            
            <BarGraph name={"React,laravel,php"} percent={80} />
            <BarGraph name={"SQL,PL/SQL"} percent={80} />
            <BarGraph name={"Cybersecurity"} percent={65} />
            <BarGraph name={"Github & Git"} percent={60} />
            <BarGraph name={"Networking"} percent={75} />
            <BarGraph name={"Communication Skills"} percent={90} />
            <BarGraph name={"Leadership"} percent={90} />
           
          </div>
          <a
            href={require("../../assets/files/Diana Moraa Resume.pdf")}
            download={"Diana Moraa's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>

         
        </div>
      </div>
    </div>
  );
}
