import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define TypeScript interface for Movie
interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string;
  year: number;
  rating: string;
  description: string;
  seasons?: number;
}

const movieData: Movie[] = [
  {
    id: 1,
    title: "Squid Game",
    image: "../../assets",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 2,
    title: "straw",
    image: "../../assets/movies/the-crown.jpg",
    genre: "Drama",
    year: 2016,
    rating: "TV-MA",
    description:
      "This drama follows the political rivalries and romance of Queen Elizabeth II's reign.",
    seasons: 5,
  },
  {
    id: 3,
    title: "tyler perry's MADEA'S DESTION WEDDINGG",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 4,
    title: "The sandman",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 5,
    title: "Brick",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 6,
    title: "Zia",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 7,
    title: "Untamed",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 8,
    title: "JAAT",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 9,
    title: "KINGS OF JO'BURG",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 10,
    title: "letters from the past",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },
  {
    id: 11,
    title: "How to kill a monkey",
    image: "../../assets/movies/stranger-things.jpg",
    genre: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    seasons: 4,
  },

];

const Hero = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeGenre, setActiveGenre] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movieData);

  // Get unique genres
  const genres = ["All", ...new Set(movieData.map((movie) => movie.genre))];

  // Filter movies by genre
  useEffect(() => {
    if (activeGenre === "All") {
      setFilteredMovies(movieData);
    } else {
      setFilteredMovies(
        movieData.filter((movie) => movie.genre === activeGenre)
      );
    }
    setCurrentSlide(0);
  }, [activeGenre]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(filteredMovies.length / 4) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(filteredMovies.length / 4) - 1 : prev - 1
    );
  };

  // Get current slide movies
  const visibleMovies = filteredMovies.slice(
    currentSlide * 4,
    (currentSlide + 1) * 4
  );

  return (
    <div className="relative bg-black/70 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../../assets/hero-background.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-white text-center px-4 py-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Netflix 
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Watch your favorite movies and TV shows anytime, anywhere.
        </p>
      </motion.div>

      {/* Genre Filter */}
      <div className="relative z-10 mb-8 flex flex-wrap justify-center gap-2 px-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeGenre === genre
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            aria-label={`Filter by ${genre}`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Carousel */}
      <div className="relative z-10 w-full max-w-6xl px-4 mb-20">
        <div className="relative overflow-hidden">
          {/* Carousel Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full ml-2"
            aria-label="Previous movies"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

            <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full mr-2 transition-shadow duration-700"
            aria-label="Next movies"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
              />
            </svg>
            </button>

          {/* Movie Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {visibleMovies.map((movie) => (
              <motion.div
                key={movie.id}
                className="relative cursor-pointer rounded-lg overflow-hidden group"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMovie(movie)}
                aria-label={`View details for ${movie.title}`}
                role="button"
                tabIndex={0}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-40 md:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">
                    {movie.title}
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <span>{movie.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Movie Details Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative">
                <img
                  src={selectedMovie.image}
                  alt={`Cover for ${selectedMovie.title}`}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full"
                  aria-label="Close movie details"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-white text-2xl md:text-3xl font-bold">
                    {selectedMovie.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-green-500 font-medium">
                      {selectedMovie.rating}
                    </span>
                    <span className="text-gray-400">{selectedMovie.year}</span>
                    {selectedMovie.seasons && (
                      <span className="text-gray-400">
                        {selectedMovie.seasons} Seasons
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded flex items-center gap-2"
                    aria-label={`Play ${selectedMovie.title}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.7L15 10l-8.7 7.3c-.6.5-1.6.1-1.6-.7V3.4c0-.8 1-1.2 1.6-.7z" />
                    </svg>
                    Play
                  </button>
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded flex items-center gap-2"
                    aria-label={`Add ${selectedMovie.title} to my list`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    My List
                  </button>
                </div>

                <p className="text-gray-300 mb-4">
                  {selectedMovie.description}
                </p>

                <div className="border-t border-gray-700 pt-4">
                  <h3 className="text-white font-bold mb-2">Details</h3>
                  <p className="text-gray-400">Genre: {selectedMovie.genre}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Curved Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M0,0 C300,60 600,-20 900,30 C1200,80 1440,40 1440,40 L1440,120 L0,120 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
