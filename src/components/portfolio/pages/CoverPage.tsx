import { motion } from "framer-motion";

const CoverPage = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-tl from-accent/10 to-transparent rounded-full translate-x-1/4 translate-y-1/4" />

      {/* Corner accents */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-12 md:w-16 h-px bg-gradient-to-r from-primary to-transparent" />
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-px h-12 md:h-16 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-12 md:w-16 h-px bg-gradient-to-l from-primary to-transparent" />
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-px h-12 md:h-16 bg-gradient-to-t from-primary to-transparent" />

      <div className="relative z-10 text-center">
        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
        >
          Shyam
          <span className="block text-primary">Sojitra</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 md:mt-8"
        >
          <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-secondary rounded-full font-body text-sm md:text-base font-medium text-secondary-foreground">
            Front-End Developer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 md:mt-10 font-body text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed px-4"
        >
          "Crafting modern, responsive & animated web experiences"
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 md:mt-12"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex items-center justify-center gap-2 text-muted-foreground/60"
          ></motion.div>
        </motion.div>
      </div>

      {/* Experience badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring" }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-12"
      >
        <div className="flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/20 bg-card">
          <span className="font-display text-xl md:text-2xl font-bold text-primary">
            2+
          </span>
          <span className="font-body text-[10px] md:text-xs text-muted-foreground">
            Years
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;
