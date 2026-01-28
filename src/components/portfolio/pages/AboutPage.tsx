import { motion } from "framer-motion";
import { Sparkles, Heart, Zap } from "lucide-react";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-full flex flex-col p-6 md:p-12 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 md:mb-8"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">01</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col justify-center"
      >
        <motion.p
          variants={itemVariants}
          className="font-body text-base md:text-lg text-foreground leading-relaxed mb-6"
        >
          I'm a passionate <span className="text-primary font-medium">Front-End Developer</span> with 
          over two years of hands-on experience building modern, user-centric web applications.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8"
        >
          My journey in web development is driven by a deep appreciation for clean, intuitive interfaces 
          and the art of bringing designs to life through code. I believe that great user experiences 
          are built on the foundation of thoughtful design and meticulous attention to detail.
        </motion.p>

        {/* Highlights */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
          <div className="group flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Clean UI Design</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">Pixel-perfect implementations</p>
            </div>
          </div>

          <div className="group flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Performance</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">Optimized & fast experiences</p>
            </div>
          </div>

          <div className="group flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">Animations</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">Smooth & delightful motion</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5 }}
        className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[150px] md:text-[200px] text-primary pointer-events-none select-none"
      >
        "
      </motion.div>
    </div>
  );
};

export default AboutPage;
