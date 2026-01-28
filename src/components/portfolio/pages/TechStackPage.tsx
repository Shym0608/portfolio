import { motion } from "framer-motion";

const technologies = [
  { name: "HTML5", icon: "🌐", category: "Core" },
  { name: "CSS3", icon: "🎨", category: "Core" },
  { name: "JavaScript", icon: "⚡", category: "Core" },
  { name: "React.js", icon: "⚛️", category: "Framework" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "Tailwind CSS", icon: "💨", category: "Styling" },
  { name: "Git", icon: "📦", category: "Tools" },
  { name: "VS Code", icon: "💻", category: "Tools" },
];

const TechStackPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative w-full h-full flex flex-col p-6 md:p-12 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 md:mb-8"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">
          04
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
          Tech Stack
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
      </motion.div>

      {/* Tech grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 content-center"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400 },
            }}
            className="group relative flex flex-col items-center justify-center p-3 md:p-4 rounded-xl bg-secondary/40 hover:bg-secondary border border-transparent hover:border-primary/20 transition-all cursor-default"
          >
            <span className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform">
              {tech.icon}
            </span>
            <span className="font-body text-xs md:text-sm font-medium text-foreground text-center">
              {tech.name}
            </span>
            <span className="font-body text-[10px] text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.category}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative gradient orb */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default TechStackPage;
