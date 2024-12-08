import aboutImg from "../assets/about-img.png";
import useScrollTo from "../hooks/useScrollTo";
function About() {
  const { handleScroll, isOpen, setIsOpen } = useScrollTo();
  return (
    <div className="flex items-center px-10 py-20 bg-[#F9F9F9]">
      <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center lg:flex-row md:flex-row justify-between h-auto lg:h-screen">
        {/* Left Section */}
        <div className="w-full p-2 md:w-1/2">
          <img
            src={aboutImg} // Replace with actual image URL
            alt="Profile"
            className="w-full max-w-md md:max-w-lg lg:max-w-3xl mx-auto"
          />
        </div>

        {/* Right Section */}
        <div className="md:ml-12 text-center md:text-left lg:w-1/2">
          <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0B1221] mb-4">
            I’m a Content Creator with over 6 years of experience.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#333] mb-6">
            I specialize in crafting content that resonates with audiences and
            drives meaningful interaction. Whether it’s through [video
            production, writing, design, etc.]
          </p>

          <div className="mb-6">
            <div className="flex justify-center md:justify-start space-x-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink">
                28+
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink">
                Projects Completed
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink">
                19+
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink">
                Happy Clients
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              className="btn-primary"
              onClick={() => handleScroll("contact")}
            >
              Contact Me
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleScroll("portfolio")}
            >
              Portfolio
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl md:text-4xl text-[#D44638]"
            >
              <i className="fab fa-google"></i> {/* Add your actual icon */}
            </a>
            <a
              href="https://slack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl md:text-4xl text-[#4A154B]"
            >
              <i className="fab fa-slack"></i> {/* Add your actual icon */}
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl md:text-4xl text-[#0088CC]"
            >
              <i className="fab fa-telegram"></i> {/* Add your actual icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
