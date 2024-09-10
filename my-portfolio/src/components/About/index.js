import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("01/21/2003");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            I'm <span className="text-yellow-600">Diana N. Moraa,</span> a Web
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            IT Professional with extensive experience in IT infrastructure management, system administration, 
            and software development. Demonstrated expertise in Office 365 administration, cybersecurity, and 
            network management, with a strong commitment to continuous improvement and user support. 
             
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            Proven ability to optimize IT systems to support organizational objectives and ensure security and 
            reliability in dynamic environments 
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>

          <a
            //href={require("../../assets/files/Diana Moraa Resume.pdf")}
          href={require("../../assets/files/Diana Moraa Resume.pdf")}
            download={"Diana Moraa's Resume"}
            target="_blank"
            rel="noreferrer"
            className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
