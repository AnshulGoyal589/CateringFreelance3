import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// Define types for props and data structures
interface QuickLink {
  name: string;
  path: string;
}

interface SocialIcon {
  Icon: React.ElementType;
  label: string;
  link: string;
}

const Footer: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    { Icon: Facebook, label: 'Facebook', link: 'https://facebook.com' },
    { Icon: Instagram, label: 'Instagram', link: 'https://instagram.com' },
    { Icon: Twitter, label: 'Twitter', link: 'https://twitter.com' },
    { Icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  const quickLinks: QuickLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Reserve Now', path: '/reserve-now' }
  ];
  
  const services: string[] = [
    'Weddings',
    'Social Events',
    'Corporate Events',
    'International Events',
    'Engagements',
    'Birthdays'
  ];

  const specialties: string[] = [
    'Custom Menus',
    'Theme Decoration',
    'Professional Staff',
    'Event Planning',
    'Venue Selection',
    'Outdoor Catering'
  ];

  return (
    <footer className="bg-[#1f1f1f] w-full py-8 sm:py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:w-1/3 w-full lg:items-start items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center flex-col mb-6">
              <Link href="/" aria-label="Savoury Soiree Home">
                <Image
                  src="/assets/Logo.png"
                  alt="Savoury Soiree Logo"
                  width={96}
                  height={96}
                  className="h-16 sm:h-24 mb-4 hover:opacity-90 transition-opacity"
                  priority
                />
              </Link>
              <h1 className="text-xl sm:text-2xl text-gray-200 font-serif text-center">
                Savoury Soirée
              </h1>
            </div>
            
            <div className="space-y-4 w-full p-4 lg:p-0 rounded-xl lg:rounded-none shadow-lg lg:shadow-none bg-black/20 lg:bg-transparent">
              <div className="flex items-start space-x-4 text-gray-400 group hover:text-gray-300 transition-colors justify-center lg:justify-start">
                <Image 
                  src="/assets/header/FooterLocation.png" 
                  alt="Location icon" 
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0" 
                />
                <address className="text-base sm:text-lg font-light not-italic">
                  211, Second Floor, Ashirwad Complex,<br />
                  Block D, Green Park, New Delhi-110016
                </address>
              </div>
              
              <a 
                href="mailto:caterers@savourysoiree.com" 
                className="flex items-center space-x-4 text-gray-400 group hover:text-gray-300 transition-colors justify-center lg:justify-start"
                aria-label="Email address"
              >
                <Image 
                  src="/assets/header/FooterMail.png" 
                  alt="Email icon" 
                  width={20}
                  height={20}
                  className="w-5 h-5 flex-shrink-0" 
                />
                <p className="text-base sm:text-lg font-light break-all">
                  caterers@savourysoiree.com
                </p>
              </a>
              
              <a 
                href="tel:+919816054322" 
                className="flex items-center space-x-4 text-gray-400 group hover:text-gray-300 transition-colors justify-center lg:justify-start"
                aria-label="Phone number"
              >
                <Image 
                  src="/assets/header/CallIcon.png" 
                  alt="Phone icon" 
                  width={20}
                  height={20}
                  className="w-5 h-5 flex-shrink-0" 
                />
                <p className="text-base sm:text-lg font-light">
                  +91-9816054322 | +91-9220444322
                </p>
              </a>
            </div>

            <div className="mt-8 w-full">
              <h2 className="text-xl sm:text-2xl font-light text-gray-400 mb-4 text-center lg:text-left">
                Find Us
              </h2>
              <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.416428373381!2d77.20275881098001!3d28.55725547560459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27271e41fd5%3A0x5d17364095cb7b52!2sAshirwad%20Complex%2C%20Block%20D%2C%20Green%20Park%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1736760711437!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Savoury Soiree Location in Green Park, New Delhi"
                  aria-label="Google Maps location of Savoury Soiree"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
          <nav className="w-full p-4 lg:p-0 rounded-xl lg:rounded-none shadow-lg lg:shadow-none bg-black/20 lg:bg-transparent" aria-labelledby="quick-links-heading">
            <h2 id="quick-links-heading" className="text-xl sm:text-2xl font-light text-gray-400 mb-4 sm:mb-6 text-center lg:text-left">
              Quick Links
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-center lg:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-gray-200 text-base sm:text-lg font-light inline-block hover:translate-x-1 transform transition-all duration-200"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full p-4 lg:p-0 rounded-xl lg:rounded-none shadow-lg lg:shadow-none bg-black/20 lg:bg-transparent" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-xl sm:text-2xl font-light text-gray-400 mb-4 sm:mb-6 text-center lg:text-left">
              Our Services
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-center lg:text-left">
              {services.map((service) => (
                <li 
                  key={service} 
                  className="text-gray-400 hover:text-gray-200 text-base sm:text-lg font-light cursor-pointer hover:translate-x-1 transform transition-all duration-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full p-4 lg:p-0 rounded-xl lg:rounded-none shadow-lg lg:shadow-none bg-black/20 lg:bg-transparent" aria-labelledby="specialties-heading">
            <h2 id="specialties-heading" className="text-xl sm:text-2xl font-light text-gray-400 mb-4 sm:mb-6 text-center lg:text-left">
              Specialties
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-center lg:text-left">
              {specialties.map((specialty) => (
                <li 
                  key={specialty} 
                  className="text-gray-400 hover:text-gray-200 text-base sm:text-lg font-light cursor-pointer hover:translate-x-1 transform transition-all duration-200"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 mb-6">
            <div className="flex space-x-4 sm:space-x-6">
              {socialIcons.map(({ Icon, label, link }) => (
                <a 
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-all transform hover:scale-110 flex items-center justify-center"
                  aria-label={`Visit our ${label} page`}
                >
                  <Icon className="text-gray-300" size={16} />
                </a>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base text-center">
              <span className="text-gray-200">4.8</span> out of 5.0 by{' '}
              <span className="text-gray-200">100+</span> Happy Customers Worldwide.{' '}
              <span className="text-gray-200">3+</span> Years of Experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between border-t border-gray-700">
            <div className="text-center sm:text-left text-gray-500 text-xs sm:text-sm pt-4 sm:pt-6">
              © {new Date().getFullYear()} Savoury Soirée. All rights reserved.
            </div>
            <div className="text-center sm:text-right text-gray-500 text-xs sm:text-sm pt-4 sm:pt-6">
              Designed & Developed By <a className="font-semibold text-gray-400 hover:text-gray-300 underline underline-offset-2" href="https://portfolio-ymyk.onrender.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Anshul Goyal's portfolio">Anshul Goyal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;