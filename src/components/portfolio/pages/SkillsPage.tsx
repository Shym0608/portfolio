import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 85, color: "primary" },
  { name: "CSS", level: 80, color: "accent" },
  { name: "JavaScript", level: 78, color: "primary" },
  { name: "React.js", level: 75, color: "accent" },
  { name: "Next.js", level: 75, color: "primary" },
  { name: "Tailwind CSS", level: 80, color: "accent" },
  { name: "Git", level: 70, color: "primary" },
];

const SkillsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative w-full h-full flex flex-col p-6 md:p-12 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 md:mb-8"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">02</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
          Skills
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
      </motion.div>

      {/* Skills list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col justify-center space-y-4 md:space-y-5"
      >
        {skills.map((skill, index) => (
          <motion.div key={skill.name} variants={itemVariants} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="relative h-2 md:h-2.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`absolute inset-y-0 left-0 rounded-full ${
                  skill.color === "primary"
                    ? "bg-gradient-to-r from-primary to-primary/70"
                    : "bg-gradient-to-r from-accent to-accent/70"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative skill icons grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5 }}
        className="absolute right-6 bottom-6 grid grid-cols-3 gap-2"
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 md:w-6 md:h-6 rounded bg-foreground"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPage;
