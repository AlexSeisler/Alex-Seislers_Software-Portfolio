import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactSocial from '../components/contact/ContactSocial';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <ContactSocial />
          </div>
        </div>
      </div>
    </div>
  );
}