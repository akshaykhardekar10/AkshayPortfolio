import { motion } from "framer-motion";
import Experience from "../components/about/Experience";
import Skills from "../components/about/Skills";
import SectionTitle from "../components/ui/SectionTitle";
import { Download, Mail } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import CertificationCard from "../components/about/CertificationCard";

const certifications = [
  {
    title: "Programming In Java",
    issuer: "NPTEL",
    year: "2024",
    logo: "/logos/nptel.png",
    link: "https://nptelcertificate.example/java",
  },
  {
    title: "DBMS",
    issuer: "NPTEL",
    year: "2025",
    logo: "/logos/nptel.png",
    link: "https://nptelcertificate.example/dbms",
  },
  {
    title: "Linux Expert",
    issuer: "LinkedIn",
    year: "2025",
    logo: "/logos/linkedin.png",
    link: "https://linkedin.com/certificate/linux",
  },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                “I’m a passionate full-stack developer and final-year
                engineering student, actively building modern web applications
                with React, Spring Boot, and Node.js. I love experimenting with
                new technologies and continuously improving my skills through
                projects, internships, and collaboration.”{" "}
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I specialize in React, SpringBoot, Node.js, and modern web
                technologies. My approach combines clean code, intuitive design,
                and robust architecture to build applications that are not only
                functional but also delightful to use.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                When I'm not coding, you'll find playing games, Helping others
                or experimenting with new technologies. I'm always eager to
                learn and grow both professionally and personally.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="./src/public/AkshayKhardekar resume(x).pdf"
                  download="Akshay_resume.pdf"
                >
                  <Button variant="primary" icon={<Download size={18} />}>
                    Download Resume
                  </Button>
                </a>
                {/* View Resume */}
                <a
                  href="./src/public/AkshayKhardekar resume(x).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" icon={<Mail size={18} />}>
                    View Resume
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" icon={<Mail size={18} />}>
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <img
                    src="./src/public/AkshayProfile2.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

  <div className="mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg text-center">
                  <span className="text-lg font-semibold">
                    {" "}
                    Student (open for work){" "}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16">
        <div className="container-custom">
          {/* Experience */}
          <Experience />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Bachelor's in Electronics and Computer Engineering
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400">
                    Sanjivani College of Engineering Kopargaon
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    2022-2026
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Focused on web technologies and human-computer interaction.
                    Thesis on optimizing React applications for performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>

              {/* ✅ Reusable Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} {...cert} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Skills />
    </div>
  );
};

export default About;
