import { useState } from "react";
import netflixLogo from "../../assets/netflix logo.jpeg";
import backgroundImage from "../../assets/background image.jpg";

const Navbar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="netflix background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar Content */}
      <nav className="relative z-10 bg-gradient-to-b from-black/70 to-transparent px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo linking to home */}
          <a href="/">
            {" "}
            {/* Changed to regular anchor since we're not navigating */}
            <img
              src={netflixLogo}
              alt="Netflix Logo"
              className="h-8 w-auto md:h-10"
            />
          </a>

          {/* Sign In Button - Now triggers modal */}
          <div>
            <button
              onClick={() => setShowSignInModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-200 font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Sign In Modal/Popup */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-transparent z-50 flex items-center justify-center p-4">
          <div className="bg-black/50 rounded-lg w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="bg-black p-4">
              <h2 className="text-white text-2xl font-bold">Sign In</h2>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email or phone number"
                    className="w-full p-3 bg-black/5 text-white rounded shadow-stone-50 border border-white/30  "
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 bg-black/5 text-white rounded shadow-stone-50 border border-white/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium"
                >
                  Sign In
                </button>
                <div>
                  <h6 className="text-gray-400 font-bold text-center text-sm">
                    OR
                  </h6>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black/5 hover:bg-red-700 text-white py-3 rounded font-medium shadow-stone-50 border border-white/30"
                >
                  Use a sign in code
                </button>
                <h1 className="text-white font-bold text-center text-sm underline">
                  forget password?
                </h1>
                <br />
                <div className="flex justify-between items-center">
                  {/* Checkbox */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <span className="text-white text-md font-simiabold">Remember me</span>
                  </label>

                  {/* Help link */}
                  <a href="" className="text-gray-400 hover:underline text-md">
                    Need help?
                  </a>
                </div>
              </form>

              <div className="mt-4 text-center text-gray-400">
                <p>
                  New to Netflix?{" "}
                  <span className="text-white hover:underline cursor-pointer">
                    Sign up now
                  </span>
                </p>
              </div>
              <div></div>
            </div>

            {/* Modal Footer */}
            <div className="bg-black/50 p-4 flex justify-top-1">
              <button
                onClick={() => setShowSignInModal(false)}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page content would go here */}
    </div>
  );
};

export default Navbar;
