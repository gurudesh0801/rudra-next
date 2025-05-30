"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "react-feather";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1B16] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-[#1F1B16]">R</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-500">Rudra Arts</h3>
          </div>
          <p className="text-gray-300">
            Preserving the rich heritage of Maratha culture through exquisite
            craftsmanship and timeless art pieces.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Instagram, url: "#" },
              { icon: Facebook, url: "#" },
              { icon: Youtube, url: "#" },
              { icon: Twitter, url: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-amber-500 transition-colors flex items-center justify-center"
                aria-label={`${social.icon.name} social link`}
              >
                <social.icon
                  size={18}
                  className="text-gray-300 hover:text-[#1F1B16]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-amber-500/30 text-amber-500">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Our Products", path: "/products" },
              { label: "Art Gallery", path: "/gallery" },
              { label: "Workshops", path: "/workshops" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-amber-500/30 text-amber-500">
            Contact Us
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 text-amber-400 flex-shrink-0" />
              <p className="text-gray-300">
                Shree Samarth Nagar, Near Shivaji Chowk,
                <br />
                Pune, Maharashtra - 411041
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-amber-400 flex-shrink-0" />
              <a
                href="tel:+919876543210"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-amber-400 flex-shrink-0" />
              <a
                href="mailto:info@rudraarts.com"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                info@rudraarts.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-amber-400 flex-shrink-0" />
              <p className="text-gray-300">
                Mon-Sat: 10AM - 7PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Compact Map Section */}
        <div className="space-y-6">
          <div className="h-48 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9420794026235!2d73.85674187418745!3d18.496547182598753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2c8c3c7d5b1%3A0x75e884f2cf2a36d1!2sShivaji%20Chowk%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1684764700000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps location"
            ></iframe>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-amber-500">
              Newsletter
            </h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-[#1F1B16] font-medium py-2 px-4 rounded transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#17130F] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Rudra Arts. All rights reserved. | Design &
            Develop by Powerhouse Tech Solutions
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-amber-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
