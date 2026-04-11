import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does CorePath Solutions offer?',
      answer: 'We offer comprehensive technology solutions including web development, mobile app development, software development, UI/UX design, cloud & DevOps, cybersecurity, AI & data solutions, and digital marketing.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Simple websites may take 4-6 weeks, while complex enterprise applications can take 3-6 months. We provide detailed timelines during the planning phase.',
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes: Discovery & Planning, Design & Prototyping, Development, Testing & QA, Deployment, and ongoing Support & Maintenance. We maintain transparent communication throughout each phase.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally. This includes bug fixes, updates, security patches, and feature enhancements.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Node.js, Python, React Native, Flutter, AWS, Azure, and more. We choose the best technology stack for each project based on your specific requirements.',
    },
    {
      question: 'How do you ensure project security?',
      answer: 'Security is our top priority. We follow industry best practices, implement encryption, conduct regular security audits, and ensure compliance with relevant regulations like HIPAA, GDPR, and SOC 2.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can augment your existing team, collaborate with your developers, or handle the entire project independently. We adapt to your preferred working model.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have extensive experience in healthcare, fintech, e-commerce, education, real estate, and startups. Our team understands the unique challenges and requirements of each industry.',
    },
    {
      question: 'How do you handle project changes?',
      answer: 'We use agile methodologies that accommodate changes efficiently. We maintain flexibility while managing scope, timeline, and budget through transparent communication and change management processes.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically work with milestone-based payments: an initial deposit, payments at key project milestones, and final payment upon completion. We can discuss custom payment arrangements based on your needs.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90">
              Find answers to common questions about our services and process
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to help. Reach out and we'll get back to you promptly.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
