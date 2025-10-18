import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Info } from 'lucide-react';
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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      layoutId={`project-${project.id}`}
    >
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        {/* Title + Info Button */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <button
            onClick={() => setShowDetails(true)}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Info size={18} />
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-600/90 text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              Live Demo
            </a>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              🚧 Demo coming soon
            </p>
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

      {/* Modal for Details */}
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
