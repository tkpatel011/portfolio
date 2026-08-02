import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaMapMarkerAlt, FaCheckCircle, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalDetails } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg({ type: 'error', text: 'Please complete all required fields.' });
      return;
    }

    setSending(true);
    setStatusMsg({ type: '', text: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Portfolio Contact Form Message',
            message: formData.message,
            to_email: personalDetails.handles.email
          },
          publicKey
        );
        setStatusMsg({ 
          type: 'success', 
          text: 'Thank you! Your message has been sent to Tej.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error('EmailJS error:', err);
        // Fallback to mailto link
        window.location.href = `mailto:${personalDetails.handles.email}?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setStatusMsg({ 
          type: 'success', 
          text: 'Opening your default email client to send message to Tej...' 
        });
      } finally {
        setSending(false);
      }
    } else {
      // Direct Mailto Trigger & Confirmation
      setTimeout(() => {
        window.location.href = `mailto:${personalDetails.handles.email}?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSending(false);
        setStatusMsg({ 
          type: 'success', 
          text: 'Thank you! Opening your email app to send message to Tej.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 600);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0F1115] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D212B] border border-[#2A303F] text-xs font-semibold text-[#8FAE5D] uppercase tracking-wider">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5]">
            Get In <span className="text-olive-gradient">Touch</span>
          </h2>
          <p className="text-sm text-[#B8BDC8] max-w-2xl mx-auto">
            Messages sent through this form deliver directly to my personal email inbox.
          </p>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="card-craft p-6 space-y-5">
              <h3 className="text-lg font-bold text-[#F5F5F5] border-b border-[#2A303F] pb-3">
                Contact Information
              </h3>

              <div className="space-y-3">
                <a 
                  href={personalDetails.socials.email}
                  className="flex items-center gap-3 p-3 rounded-[10px] bg-[#171A21] border border-[#2A303F] hover:border-[#8FAE5D] transition-colors"
                >
                  <div className="p-2 rounded-[8px] bg-[#8FAE5D]/15 text-[#8FAE5D]">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#B8BDC8] font-mono">Email Address</div>
                    <div className="text-xs font-bold text-[#F5F5F5] font-mono">
                      {personalDetails.handles.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-[10px] bg-[#171A21] border border-[#2A303F]">
                  <div className="p-2 rounded-[8px] bg-[#A7C97D]/15 text-[#A7C97D]">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#B8BDC8] font-mono">Location</div>
                    <div className="text-xs font-bold text-[#F5F5F5]">
                      Ahmedabad, India (Nirma University)
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links Grid */}
              <div className="pt-2">
                <div className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider font-mono mb-2.5">
                  Social & Coding Handles
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a
                    href={personalDetails.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-[8px] bg-[#171A21] border border-[#2A303F] flex flex-col items-center justify-center gap-1 hover:border-[#8FAE5D] transition-colors text-xs text-[#F5F5F5]"
                  >
                    <FaGithub size={16} />
                    <span className="font-mono text-[10px]">GitHub</span>
                  </a>

                  <a
                    href={personalDetails.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-[8px] bg-[#171A21] border border-[#2A303F] flex flex-col items-center justify-center gap-1 hover:border-blue-400 transition-colors text-xs text-[#F5F5F5]"
                  >
                    <FaLinkedin size={16} />
                    <span className="font-mono text-[10px]">LinkedIn</span>
                  </a>

                  <a
                    href={personalDetails.socials.codeforces}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-[8px] bg-[#171A21] border border-[#2A303F] flex flex-col items-center justify-center gap-1 hover:border-[#8FAE5D] transition-colors text-xs text-[#F5F5F5]"
                  >
                    <div className="font-bold text-xs font-mono">CF</div>
                    <span className="font-mono text-[10px]">Codeforces</span>
                  </a>

                  <a
                    href={personalDetails.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-[8px] bg-[#171A21] border border-[#2A303F] flex flex-col items-center justify-center gap-1 hover:border-amber-400 transition-colors text-xs text-[#F5F5F5]"
                  >
                    <div className="font-bold text-xs font-mono">LC</div>
                    <span className="font-mono text-[10px]">LeetCode</span>
                  </a>

                  <a
                    href={personalDetails.socials.codolio}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-[8px] bg-[#171A21] border border-[#2A303F] flex flex-col items-center justify-center gap-1 hover:border-[#8FAE5D] transition-colors text-xs text-[#F5F5F5] col-span-2 sm:col-span-1"
                  >
                    <FaCode size={16} className="text-[#8FAE5D]" />
                    <span className="font-mono text-[10px]">Codolio</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Column 2: Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="card-craft p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-[#F5F5F5] border-b border-[#2A303F] pb-3">
                Send a Direct Message
              </h3>

              {statusMsg.text && (
                <div className={`p-3 rounded-[8px] text-xs font-mono flex items-center gap-2 ${
                  statusMsg.type === 'success' 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                }`}>
                  <FaCheckCircle className="shrink-0" />
                  <span>{statusMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#B8BDC8]">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Alex Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-[#171A21] text-xs text-[#F5F5F5] rounded-[8px] border border-[#2A303F] focus:border-[#8FAE5D] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#B8BDC8]">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-[#171A21] text-xs text-[#F5F5F5] rounded-[8px] border border-[#2A303F] focus:border-[#8FAE5D] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#B8BDC8]">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Software Engineering Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#171A21] text-xs text-[#F5F5F5] rounded-[8px] border border-[#2A303F] focus:border-[#8FAE5D] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#B8BDC8]">Message *</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#171A21] text-xs text-[#F5F5F5] rounded-[8px] border border-[#2A303F] focus:border-[#8FAE5D] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-[#8FAE5D] text-[#0F1115] font-semibold text-xs hover:bg-[#A7C97D] transition-colors cursor-pointer disabled:opacity-50"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>{sending ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
