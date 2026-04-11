import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Software Development</option>
                    <option>UI/UX Design</option>
                    <option>Cloud & DevOps</option>
                    <option>Cybersecurity</option>
                    <option>AI & Data Solutions</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to us through any of the following channels
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      2525 Old Farm Rd<br />
                      Houston, Texas 77063
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+13464484823" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 346-448-4823
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:victrodriguez88@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      victrodriguez88@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 bg-muted rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.4167!2d-95.5194!3d29.7374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzE0LjYiTiA5NcKwMzEnMDkuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
