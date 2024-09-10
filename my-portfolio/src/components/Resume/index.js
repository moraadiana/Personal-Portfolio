import DownloadIcon from "@mui/icons-material/Download";

export default function Education() {
  return (
    <div id="education" className="min-h-screen flex flex-col items-center text-center px-4 py-8">
      <div className="text-5xl font-bold mb-8" data-aos="slide-down">
        Education
      </div>
      
      <div className="w-full max-w-4xl">
        <ol className="relative border-l border-gray-700 ml-4 md:ml-8">
          {/* BSc. in Computer Technology */}
          <li className="relative mb-8" data-aos="zoom-in" data-aos-offset={"-15"} data-aos-delay="1300">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              BSc. in Computer Technology
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on December 18, 2020
            </time>
            <p className="text-base font-normal text-gray-400">
              I learned about computer systems, software development, networking, 
              and IT infrastructure. The program equipped me with skills in programming,
              database management, cybersecurity, and hardware systems. Through a combination 
              of theory and hands-on practice, I gained the ability to solve real-world technology challenges and prepare for careers in IT and software development.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={require("../../assets/files/DIANA MORAA DEGREE CERTIFICATE.pdf")}
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>

          {/* Dynamics 365 Business Central Functional Consultant */}
          <li className="relative mb-8" data-aos="zoom-in">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Dynamics 365 Business Central Functional Consultant
            </h3>
            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
              Completed in 2024
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              Verifies expertise in configuring and implementing Business Central.
              It covers financials, sales, purchasing, and business process setup,
              demonstrating the ability to align the system with business needs for 
              efficient operations.
            </p>
            <a
              href={require("../../assets/files/DIANA MORAA - (Dynamic365) Functional Consultant Certificate.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>

          {/* Technical Support Fundamentals */}
          <li className="relative mb-8" data-aos="zoom-out" data-aos-delay="700">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Technical Support Fundamentals
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed in 2022
            </time>
            <p className="text-base font-normal text-gray-400">
              Covers essential IT skills, including troubleshooting, customer support, hardware and software management, networking basics, and system administration. I learned foundational knowledge to handle common technical issues, work with operating systems, and provide basic IT support in various environments.
            </p>
            <a
              href={require("../../assets/files/Diana Technical Support Fundamental.pdf")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
