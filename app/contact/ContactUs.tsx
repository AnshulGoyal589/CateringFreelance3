"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

// interface ContactFormProps {
//   setPreview: (title: string) => void;
// }

interface FormData {
  name: string;
  email: string;
  message: string;
  reason: string;
  [key: string]: string;
}

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
//   useEffect(() => {
//     props.setPreview("Contact Us");
//   }, [props]);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      toast.loading('Sending email...', {
        id: 'sending',
        position: 'top-center',
      });

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
      
      const result = await emailjs.send(serviceId as string, templateId as string, data, userId);
      console.log("Result is ", result);

      toast.success('Email sent successfully!', {
        id: 'sending',
        position: 'top-center',
      });
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send the message. Please try again.', {
        id: 'sending',
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <Head>
        <title>Contact Savoury Soiree | Get in Touch with Our Catering Team</title>
        <meta name="description" content="Contact Savoury Soiree catering services for inquiries, bookings, and more. Our team is ready to help with your event catering needs in New Delhi." />
        <meta name="keywords" content="catering contact, event catering, Savoury Soiree, Delhi catering, food service contact" />
        <meta property="og:title" content="Contact Savoury Soiree Catering" />
        <meta property="og:description" content="Get in touch with Savoury Soiree for all your catering needs in New Delhi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://savourysoiree.com/contact" />
        <link rel="canonical" href="https://savourysoiree.com/contact" />
      </Head> */}

      <div className="bg-[#ecece2] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-16">
            
            <div className="relative">
              <div className="bg-[#fcfcfa] shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h1>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-[#FF9A8B]/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-[#FF9A8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <a href="tel:+919816054322" className="text-gray-600 mt-1 hover:text-[#FF9A8B]">+91 98160 54322</a>
                      <br />
                      <a href="tel:+919220444322" className="text-gray-600 hover:text-[#FF9A8B]">+91 92204 44322</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-[#FF9A8B]/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-[#FF9A8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <a href="mailto:caterers@savourysoiree.com" className="text-gray-600 mt-1 hover:text-[#FF9A8B]">caterers@savourysoiree.com</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-[#FF9A8B]/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-[#FF9A8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Location</p>
                      <address className="text-gray-600 mt-1 not-italic">
                        211, Second Floor, Ashirwad Complex,
                        <br/>
                        Block D, Green Park, New Delhi-110016
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 md:mt-0">
              <div className="bg-[#fcfcfa] shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      {...register('message', { required: true })}
                      rows={4}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach resize-none"
                      placeholder="How can we help you?"
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600" role="alert">Please enter your message.</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        {...register('name', { required: true })}
                        type="text"
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach"
                        placeholder="John Doe"
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600" role="alert">Please enter your name.</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        {...register('email', { 
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          } 
                        })}
                        type="email"
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach"
                        placeholder="john@example.com"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600" role="alert">
                          {errors.email.message || "Please enter a valid email."}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Contact
                    </label>
                    <input
                      id="reason"
                      {...register('reason', { required: true })}
                      type="text"
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach"
                      placeholder="e.g., General Inquiry"
                      aria-required="true"
                      aria-invalid={errors.reason ? "true" : "false"}
                    />
                    {errors.reason && (
                      <p className="mt-2 text-sm text-red-600" role="alert">Please enter your reason for contact.</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-6 rounded-lg text-base font-medium text-white shadow-sm ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-[#FF9A8B] hover:bg-[#FF9A8B]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peach'
                      }`}
                      aria-disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;