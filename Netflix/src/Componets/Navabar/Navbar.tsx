
import netflixLogo from "../../assets/netflix logo.jpeg";
import backgroundImage from "../../assets/background image.jpg";

const Navbar = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="netflix background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar Content */}
      <nav className="relative z-10 bg-transparent text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img
              src={netflixLogo}
              alt="Netflix Logo"
              className="h-8 w-21 md:h-10"
            />
          </div>
          <ul className="flex space-x-4 items-center">
            <li>
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base transition-colors duration-200">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
