import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import Button from '../ui/Button';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layoutId={`project-${project.id}`}
    >
      <div className="relative overflow-hidden w-full h-64">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute bottom-0 w-full p-6">
            <motion.h3 
              className="text-xl font-semibold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-600/90 text-white"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <p className="text-gray-700 dark:text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
          <button
            onClick={() => setShowDetails(true)}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Info size={18} />
          </button>
        </div>
        
        <div className="flex space-x-3 mt-4">
          {project.demoUrl && (
            <Button
              variant="primary"
              size="sm"
              icon={<ExternalLink size={16} />}
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
          
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              icon={<Github size={16} />}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;