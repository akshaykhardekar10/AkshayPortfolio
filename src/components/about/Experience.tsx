import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Java Developer Intern ',
      company: 'Infosys SpringBoard (Virtual Internship)',
      period: '09/2025 - Present',
      description: 'Worked in a Team to build a Scalable and robust application Named "FixitNow services".',
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Work Experience"
          subtitle="My professional journey so far"
        />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
              
              <div className="mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">•</span>
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;