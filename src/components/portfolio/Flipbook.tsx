import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CoverPage from "./pages/CoverPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import TechStackPage from "./pages/TechStackPage";
import ContactPage from "./pages/ContactPage";

const pages = [
  { id: 0, component: CoverPage, title: "Cover" },
  { id: 1, component: AboutPage, title: "About" },
  { id: 2, component: SkillsPage, title: "Skills" },
  { id: 3, component: ExperiencePage, title: "Experience" },
  { id: 4, component: TechStackPage, title: "Tech Stack" },
  { id: 5, component: ContactPage, title: "Contact" },
];

const Flipbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    const newPage = currentPage + newDirection;
    if (newPage >= 0 && newPage < pages.length) {
      setDirection(newDirection);
      setCurrentPage(newPage);
    }
  };

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12">
      {/* Page indicator dots */}
      <div className="flex gap-2 mb-6 md:mb-8">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => goToPage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentPage
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to ${page.title} page`}
          />
        ))}
      </div>

      {/* Book container */}
      <div className="relative w-full max-w-4xl perspective-1000">
        {/* Navigation arrows - Left */}
        <button
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className={`absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-card shadow-page transition-all duration-300 ${
            currentPage === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:shadow-page-hover hover:scale-110"
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        {/* Page */}
        <div
          className="relative w-full aspect-[3/4] md:aspect-[4/3] overflow-hidden"
          style={{ perspective: "1500px" }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="absolute inset-0 bg-card rounded-lg md:rounded-2xl shadow-page overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
              }}
            >
              <CurrentPageComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows - Right */}
        <button
          onClick={() => paginate(1)}
          disabled={currentPage === pages.length - 1}
          className={`absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-card shadow-page transition-all duration-300 ${
            currentPage === pages.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:shadow-page-hover hover:scale-110"
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      </div>

      {/* Page number */}
      <div className="mt-6 md:mt-8 font-body text-sm text-muted-foreground">
        <span className="text-primary font-medium">{currentPage + 1}</span>
        <span className="mx-2">/</span>
        <span>{pages.length}</span>
      </div>
    </div>
  );
};

export default Flipbook;
