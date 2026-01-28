import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactPage = () => {
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
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-tr from-accent/10 to-transparent rounded-full -translate-x-1/4 translate-y-1/4" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-lg"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">
            05
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Main contact info */}
        <motion.div
          variants={itemVariants}
          className="font-body text-base md:text-lg text-muted-foreground mt-6 mb-8 leading-relaxed"
        >
          <p>
            📧 Email:{" "}
            <a href="mailto:shyam@example.com" className="text-primary">
              shymsojitra2001@gmail.com
            </a>
          </p>
          <p>
            📱 Phone:{" "}
            <a href="tel:+911234567890" className="text-primary">
              +91 9724784042
            </a>
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&to=shymsojitra2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://linkedin.com/in/shyam-sojitra-8a2a7023b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground hover:text-primary transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Footer text */}
        <motion.p
          variants={itemVariants}
          className="mt-8 font-body text-xs text-muted-foreground"
        >
          Based in India • Open to remote opportunities
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
