"use client";
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <>
      {/* Success Message Alert */}
      {submitted && (
        <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg flex items-center animate-pulse">
          <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
          <p className="text-green-800 font-medium">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="input your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="How can we help you?"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder="Please describe your question or feedback..."
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all w-full md:w-auto"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}