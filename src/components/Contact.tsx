import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, useInView, useAnimation } from 'framer-motion';

const Contact = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleNavigation = async (event: Event) => {
      if ((event as CustomEvent).detail.section === 'contact') {
        await controls.start("hidden");
        controls.start("visible");
      }
    };

    window.addEventListener('navigateToSection', handleNavigation);
    return () => window.removeEventListener('navigateToSection', handleNavigation);
  }, [controls]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    emailjs
      .send(
        'service_hjp8alo', // Replace with your EmailJS service ID
        'template_koviqk5', // Replace with your EmailJS template ID
        formData,
        'fmhi-fOM4y1TL48qU' // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setFeedback({ type: 'success', message: 'Votre message a été ajouté avec succès!' });
          setFormData({ name: '', email: '', message: '' });
            // Clear the feedback message after 5 seconds
          setTimeout(() => {
            setFeedback(null);
          }, 5000);
        },
        (error) => {
          setFeedback({ type: 'error', message: 'Failed to send the message. Please try again.' });
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prenez contact</h2>
          <p className="text-lg text-gray-600">Discutons de votre prochain projet</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[Mail, Phone, MapPin].map((Icon, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="h-6 w-6 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {Icon === Mail ? 'Email' : Icon === Phone ? 'Téléphone' : 'Location'}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {Icon === Mail ? 'cheikhibradev@gmail.com' : Icon === Phone ? '+221 77 486 83 00' : 'Dakar, Sénégal'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Prénom et nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send className={`h-5 w-5 mr-2 ${loading && 'animate-spin'}`} />
              {loading ? 'Envoi en cours...' : 'Envoyer Le Message'}
            </motion.button>

            {feedback && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`mt-4 text-sm ${
                  feedback.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {feedback.message}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
