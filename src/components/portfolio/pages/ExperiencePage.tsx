import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "UI development & component-based architecture",
  "Building responsive layouts for all devices",
  "Implementing smooth animations & transitions",
  "Performance optimization & best practices",
  "Cross-browser compatibility testing",
  "Collaborating with design & backend teams",
];

const ExperiencePage = () => {
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
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">03</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
          Experience
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex flex-col"
      >
        {/* Role header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Front-End Developer
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1 bg-secondary rounded-full font-body text-xs font-medium text-secondary-foreground">
                2+ Years
              </span>
              <span className="font-body text-sm text-muted-foreground">
                Full-time
              </span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <h4 className="font-body text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Key Responsibilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-colors group"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm text-foreground">{responsibility}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 rounded-xl border border-border bg-secondary/20"
        >
          <p className="font-body text-sm text-muted-foreground italic">
            "Focused on delivering high-quality, maintainable code while creating 
            exceptional user experiences across diverse projects."
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative timeline */}
      <div className="absolute left-6 md:left-12 top-32 bottom-12 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
    </div>
  );
};

export default ExperiencePage;
