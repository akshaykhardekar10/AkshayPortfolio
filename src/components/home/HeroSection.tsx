import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20 dark:to-transparent -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ---- Right: Profile Image (comes first on mobile) ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src="./src/public/AkshayProfile2.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge under photo */}
  <div className="mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg text-center">
                <span className="text-lg font-semibold">
                  Student (open for work)
                </span>
              </div>
            </div>
          </motion.div>

          {/* ---- Left: Intro Text (comes second on mobile) ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Akshay Khardekar
              </span>
              <span className="block mt-2">Full Stack Developer</span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              I build beautiful, functional, and accessible web applications
              with modern technologies. Let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight />}
                iconPosition="right"
                onClick={() => (document.location.href = "/projects")}
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => (document.location.href = "/contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Socials */}
            <div className="mt-12 flex items-center space-x-6">
              <Link
                to="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github size={28} />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                <Linkedin size={28} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
