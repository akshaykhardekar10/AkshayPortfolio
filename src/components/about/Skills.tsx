import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Spring', 'Springboot', 'Node.js (basics)'] },
    { category: 'Tools', items: ['Git','Github', 'Docker', 'Postman'] },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle 
          title="My Skills"
          subtitle="Technologies and tools I use to bring products to life"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              
              <motion.ul 
                className="space-y-3"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    className="flex items-center"
                    variants={item}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;