import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90">Last updated: April 10, 2026</p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              CorePath Solutions LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Company information</li>
              <li>Project requirements and communications</li>
              <li>Payment and billing information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your comments and questions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate about products, services, and events</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist our operations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: victrodriguez88@gmail.com
              <br />
              Phone: +1 346-448-4823
              <br />
              Address: 2525 Old Farm Rd, Houston, Texas, 77063
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
