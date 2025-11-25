import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Ghost } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setMessageSent(false);

    setTimeout(() => {
      setIsSending(false);
      setMessageSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setMessageSent(false), 3000);
    }, 1500);
  };

    const ContactInfoItem = ({ icon: Icon, label, value, href }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg shadow-sm hover:bg-zinc-700 transition-colors duration-300"
        >
            <Icon className="size-6 text-cyan-400" />
            <div>
            <span className="text-xs text-zinc-400">{label}</span>
            <p className="text-sm font-medium text-white">{value}</p>
            </div>
        </a>
    );

  return (
    <div className="flex items-center justify-center min-h-screen w-full text-white p-4 sm:p-8">
      <div className="relative w-full max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-2">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Life's create something amazing
            together.
          </p>
        </header>

        {/* Main Card */}
        <div className="relative bg-whte/5 backdrop-blur-5xl rounded-2xl shadow-2xl shadow-cyan-900/20 overflow-hidden">
          
          <div className="absolute inset-0 p-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/30 via-transparent to-transparent"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            
           
            <div className="p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-zinc-400 mb-8">
                I'm always excited to discuss new opportunities, collaborate on
                interesting projects, or simply chat about technology and
                innovation.
              </p>

              <div className="space-y-4 mb-8">
                <ContactInfoItem
                  icon={Mail}
                  label="EMAIL"
                  value="somorinolusola1@gmail.com"
                  href="mailto:somorinolusola1@gmail.com"
                />
                <ContactInfoItem
                  icon={Github}
                  label="GITHUB"
                  value="github.com/olusolasomorin"
                  href="https://github.com/olusolasomorin"
                />
                <ContactInfoItem
                  icon={Linkedin}
                  label="LINKEDIN"
                  value="linkedin.com/in/olusola-somorin"
                  href="https://www.linkedin.com/in/olusola-somorin-b1212b230/"
                />
                <ContactInfoItem
                  icon={MapPin}
                  label="LOCATION"
                  value="Nigeria"
                />
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </div>
                  <h3 className="font-semibold text-white">
                    Available for Projects
                  </h3>
                </div>
                <p className="text-sm text-zinc-400">
                  Currently accepting new freelance projects and collaboration
                  opportunities.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-zinc-800/50">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Tell me about your project or just say hello...
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all resize-none"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 cursor-pointer rounded-lg font-semibold transition-all duration-300 ${
                    isSending
                      ? 'bg-zinc-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-zinc-900 hover:from-cyan-500 hover:to-cyan-600 shadow-lg shadow-cyan-500/30'
                  }`}
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="size-5" />
                    </>
                  )}
                </button>
                
                {/* Success Message */}
                {messageSent && (
                  <p className="text-center text-green-400 font-medium">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}