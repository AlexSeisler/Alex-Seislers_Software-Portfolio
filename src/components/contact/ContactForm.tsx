import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, Check, Code, Bot, Globe } from 'lucide-react';

type ProjectType = 'Software Development' | 'AI Solutions' | 'Web Development' | 'Other';
type ContactMethod = 'Email' | 'Phone' | 'Video Call';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: ProjectType;
  message: string;
  contactMethod: ContactMethod;
  attachments: File[];
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Software Development',
    message: '',
    contactMethod: 'Email',
    attachments: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(e.target.files!)],
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.fullName}
              onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.phone}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
            Project Type *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 'Software Development', icon: Code },
              { value: 'AI Solutions', icon: Bot },
              { value: 'Web Development', icon: Globe },
              { value: 'Other', icon: Code }
            ].map((type) => (
              <label
                key={type.value}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer transition-colors
                  ${formData.projectType === type.value 
                    ? 'bg-blue-500/20 border-2 border-blue-500' 
                    : 'bg-gray-700 border-2 border-transparent hover:border-gray-600'}`}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type.value}
                  checked={formData.projectType === type.value}
                  onChange={e => setFormData(prev => ({ ...prev, projectType: e.target.value as ProjectType }))}
                  className="sr-only"
                />
                <type.icon className={`w-6 h-6 ${formData.projectType === type.value ? 'text-blue-400' : 'text-gray-400'}`} />
                <span className={`text-sm ${formData.projectType === type.value ? 'text-blue-400' : 'text-gray-300'}`}>
                  {type.value}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Project Description *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.message}
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Preferred Contact Method *
          </label>
          <div className="flex gap-4">
            {['Email', 'Phone', 'Video Call'].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={formData.contactMethod === method}
                  onChange={e => setFormData(prev => ({ ...prev, contactMethod: e.target.value as ContactMethod }))}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-300">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Attachments (Optional)
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
              <Upload className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300">Choose Files</span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
                accept="image/*,.pdf,.doc,.docx"
              />
            </label>
            {formData.attachments.length > 0 && (
              <span className="text-gray-400 text-sm">
                {formData.attachments.length} file(s) selected
              </span>
            )}
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send className="w-5 h-5" />
          Send Message
        </motion.button>
      </form>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg flex items-center gap-3"
        >
          <Check className="w-5 h-5" />
          Thank you for reaching out! I'll get back to you within 24-48 hours.
        </motion.div>
      )}
    </motion.div>
  );
}