import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Kopargaon, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a href="mailto:khardekarakshay33@gmail.com" className="hover:underline">
                         khardekarakshay33@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a href="tel:+918799943942" className='hover:underline'>
                          +91 8799943942
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Availability
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Available for Internships & full-time opportunities
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/AkshayKhardekar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                    >
                      LinkedIn
                    </a>
                    
                    <a 
                      href="https://github.com/akshaykhardekar10" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-black"
                    >
                      GitHub
                    </a>
                 </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px]"
            >
              <iframe 
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3751.720777086763!2d74.47542007499942!3d19.894008981486305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUzJzM4LjQiTiA3NMKwMjgnNDAuOCJF!5e0!3m2!1sen!2sin!4v1747234780568!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      {/* <ContactForm /> */}
    </div>
  );
};

export default Contact;