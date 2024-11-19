  import { Mail, Phone, MapPin, Send } from 'lucide-react';
  import { useState } from 'react';
  import emailjs from 'emailjs-com';

  const Contact = () => {
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

    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prenez contact</h2>
            <p className="text-lg text-gray-600">Discutons de votre prochain projet</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">cheikhibradev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                  <p className="mt-1 text-gray-600">+221 77 486 83 00</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className={`h-5 w-5 mr-2 ${loading && 'animate-spin'}`} />
                {loading ? 'Envoi en cours...' : 'Envoyer Le Message'}
              </button>
              {feedback && (
              <p
                className={`mt-4 text-sm feedback-message ${
                  !feedback && 'hide'
                } ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
              >
                {feedback.message}
              </p>
            )}
            </form>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;
